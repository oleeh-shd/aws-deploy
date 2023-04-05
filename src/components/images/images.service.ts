import { Response } from "express";
import AWS from "aws-sdk";
import crypto from "crypto";
import { myDataSource } from "../../../app-data-source";
import { Image } from "../../entity/image.entity";

const s3 = new AWS.S3();

AWS.config.update({
    region: process.env.AWS_REGION,
});

const generateFileName = (bytes = 16) =>
    crypto.randomBytes(bytes).toString("hex");

const findById = async (id: string) => {
    return myDataSource.getRepository(Image).findOne({
        where: {
            id: Number(id),
        },
    });
};

export const upload = async (imageData: Buffer, res: Response) => {
    const imgName = generateFileName();

    const params = {
        Bucket: process.env.AWS_S3_BUCKET!,
        Key: imgName,
        Body: imageData,
    };

    s3.putObject(params, async (err, data) => {
        if (err) {
            throw err;
        } else {
            const image = myDataSource.getRepository(Image).create({ imgName });
            await myDataSource.getRepository(Image).save(image);

            res.send(`Image ${imgName} successfully created`);
        }
    });
};

export const findImageById = async (id: string, res: Response) => {
    const image = await findById(id);

    if (!image) return;

    const params = {
        Bucket: process.env.AWS_S3_BUCKET!,
        Key: image.imgName,
    };

    try {
        s3.getObject(params).createReadStream().pipe(res);
    } catch (err) {
        throw err;
    }
};

export const removeImageById = async (id: string) => {
    const image = await findById(id);

    if (!image) return;

    myDataSource.getRepository(Image).remove(image);

    const params = {
        Bucket: process.env.AWS_S3_BUCKET!,
        Key: image.imgName,
    };

    try {
        s3.deleteObject(params).promise();
    } catch (err) {
        throw err;
    }
};

export const findAll = () => {
    return myDataSource.getRepository(Image).find();
};

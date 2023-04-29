import { Response } from "express";

class SuccessResponse {
    statusCode: number;
    data: string | object;
    code: string;

    constructor(res: Response, statusCode: number, data: string | object = '', code = '') {
        this.statusCode = statusCode;
        this.data  = data;
        this.code = code;
    }

    static ok(res: Response, data: string | object = 'OK', code = '') {
        return new SuccessResponse(res, 200, data, code || 'ok').send(res);
    }

    static created(res: Response, data: string | object = 'Created', code = '') {
        return new SuccessResponse(res, 201, data, code || 'created').send(res);
    }

    static accepted(res: Response, data: string | object = 'Accepted', code = '') {
        return new SuccessResponse(res, 202, data, code || 'accepted').send(res);
    }

    static noContent(res: Response, data: string | object = 'No Content', code = '') {
        return new SuccessResponse(res, 204, data, code || 'no_content').send(res);
    }

    static resetContent(res: Response, data: string | object = 'Reset Content', code = '') {
        return new SuccessResponse(res, 205, data, code || 'reset_content').send(res);
    }

    static partialContent(res: Response, data: string | object = 'Partial Content', code = '') {
        return new SuccessResponse(res, 206, data, code || 'partial_content').send(res);
    }

    static alreadyReported(res: Response, data: string | object = 'Already Reported', code = '') {
        return new SuccessResponse(res, 208, data, code || 'already_reported').send(res);
    }

    static imUsed(res: Response, data: string | object = 'IM Used', code = '') {
        return new SuccessResponse(res, 226, data, code || 'im_used').send(res);
    }

    static send(res: Response, statusCode:number, data: string | object, code: string) {
        return new SuccessResponse(res, statusCode, data, code).send(res);
    }

    send(res: Response) {
        return res.status(this.statusCode).send(
            {
                success: true,
                code: this.code,
                data: this.data
            }
        );
    }
}

export default SuccessResponse;
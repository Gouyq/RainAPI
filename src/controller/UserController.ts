import { Request, Response, NextFunction} from 'express'


export const getUser = (req: Request, res: Response, next: NextFunction) => {
    res.send(req.params.id);
}

export const postUser = (req: Request, res: Response, next: NextFunction) => {
    return null;
}

export const putUser = (req: Request, res: Response, next: NextFunction) => {
    return null;
}
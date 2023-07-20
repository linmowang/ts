declare module "express" {
  interface Router {
    get(path: string, cb: (res: any, req: any) => void): void;
  }

  interface App {
    use(path: string, router: any): void;
    listen(port: number, cb?: () => void);
  }
  interface Express {
    (): App;
    Router(): Router;
  }

  const express: Express;

  export default express;
}
declare var express_a: number;
declare function express_fn(params: string);
declare class express_cls {
  constructor(parameters);
}

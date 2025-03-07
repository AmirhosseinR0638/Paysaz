import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  let request = req;
  if (req.url != 'http://localhost:5216/api/v1/login') {
    request = req.clone({
      headers: req.headers.set('Authorization', localStorage.getItem('TK')),
    });
  }
  return next(request);
};

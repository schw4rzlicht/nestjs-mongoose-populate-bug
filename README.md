This repo demonstrates a bug in `@nestjs/mongoose` that leads to `populate()` not working.

See https://github.com/nestjs/mongoose/issues/2421

To reproduce:

1. `npm install`
2. `npm run start:dev` with debugger
3. Your debugger will halt at the appropriate line, inspect `parent` object as described in `src/app.service.ts`.
4. Stop execution
5. Change dependency `@nestjs/mongoose` to `10.0.1` (make sure to NOT in include `^`!) in `package.json`
7. repeat steps 1-3

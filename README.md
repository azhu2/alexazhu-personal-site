# Personal website

Site: https://alexazhu.com

## Prod server

Set up with AWS CodePipeline triggering CodeBuild to copy relevant built artifacts to an S3 static website hosting bucket fronted by CloudFront. Submodules are built in separately as additional CodeBuild "sources". See `buildspec.yaml` for build.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

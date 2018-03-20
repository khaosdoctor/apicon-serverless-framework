# apicon-serverless-framework

> Simple deploy to AWS lambda in 3 minutes

## What is this

This is a simple example boilerplate used to demonstrate how we can deploy a serverless function to AWS Lambda in less than 3 minutes. 

This talk was presented on [APICon Conference](http://apicon.com.br) on March 23rd 2018.

This function is simply a factorial API.

## File contents

- `serverless.yml`: Base template file definition for all functions inside the service (project)
- `handler.js`: Base Javascript file to be read by AWS Lambda as function entrypoint

## Running locally

Install the [Serverless Framework](https://serverless.com/framework/docs) using `npm i -g serverless` or `yarn global add serverless` and then type
`sls deploy` inside the project directory root.

## Recreating this

After installing Serverless, from the step above, run `serverless create --template aws-nodejs` inside any folder, those two files `serverless.yaml`
and `handler.js` will be created for you. 

You can edit the definitions of the whole service inside the `serverless.yaml` file.

After that run `sls deploy` inside the same folder.

> Don't forget to add your provider credentials

Created by: [@khaosdoctor](https://lsantos.me)

#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { ImageOptimizationStack } from '../lib/vault-thumbnail-optimization';
import { ImageOptimizationProdStack } from '../lib/vault-thumbnail-optimization-prod'; // Assuming you have a separate stack for prod

const app = new cdk.App();
const env = app.node.tryGetContext('env');

if (env === 'prod') {
    console.log(`Running Prod Deployment`)
  new ImageOptimizationProdStack(app, 'vault-thumbnail-optimization-prod', {
    // Production-specific props
  });
} else if(env == 'dev') {
  new ImageOptimizationStack(app, 'vault-thumbnail-optimization', {
    // Development-specific props
  });
}
else {
  console.log("Enter env bucket name and all details")
}
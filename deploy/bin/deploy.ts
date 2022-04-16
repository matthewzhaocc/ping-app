#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { DeployStack } from "../lib/deploy-stack";
import { RepositoryStack } from "../lib/repo-stack";

const app = new cdk.App();
const repoStack = new RepositoryStack(app, "RepoStack", {});
const deployStack = new DeployStack(app, "DeployStack", {
  repo: repoStack.repo,
});

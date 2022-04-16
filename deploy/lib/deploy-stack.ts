import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";

import * as ecsPatterns from "aws-cdk-lib/aws-ecs-patterns";
import * as ec2 from "aws-cdk-lib/aws-ec2";
import * as ecs from "aws-cdk-lib/aws-ecs";
import { IRepository } from "aws-cdk-lib/aws-ecr";

export interface DeployStackProp extends StackProps {
  imageVersion?: string;
  repo: IRepository;
}

export class DeployStack extends Stack {
  vpc: ec2.Vpc;
  app: ecsPatterns.ApplicationLoadBalancedFargateService;
  constructor(scope: Construct, id: string, props?: DeployStackProp) {
    super(scope, id, props);

    this.vpc = new ec2.Vpc(this, "app-vpc");

    this.app = new ecsPatterns.ApplicationLoadBalancedFargateService(
      this,
      "app-fg-service",
      {
        vpc: this.vpc,
        desiredCount: 1,
        taskImageOptions: {
          image: ecs.ContainerImage.fromEcrRepository(
            props?.repo as IRepository,
            props?.imageVersion || "latest"
          ),
        },
      }
    );
  }
}

import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import * as ecr from "aws-cdk-lib/aws-ecr";

export class RepositoryStack extends Stack {
  repo: ecr.Repository;
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    this.repo = new ecr.Repository(this, "app-repo");
  }
}

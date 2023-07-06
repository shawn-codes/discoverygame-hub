import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

import GameCard from "./GameCard";

const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;

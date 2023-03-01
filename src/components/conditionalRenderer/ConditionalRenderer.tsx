import { FC, memo } from "react";

interface ConditionalRendererProps {
  condition: boolean;
  whenConditionIsTrue: any;
  whenConditionIsFalse: any;
}

const ConditionalRenderer: FC<ConditionalRendererProps> = ({
  condition,
  whenConditionIsFalse,
  whenConditionIsTrue,
}) => {
  return <>{condition ? whenConditionIsTrue : whenConditionIsFalse}</>;
};

export default memo(ConditionalRenderer);

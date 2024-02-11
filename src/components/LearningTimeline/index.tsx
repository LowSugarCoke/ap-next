import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";

export interface LearningStage {
  icon: React.ElementType;
  title: string;
  description: string;
  iconColorClass: string;
}

export interface LearningTimelineProps {
  stages: LearningStage[];
  className?: string;
}

const LearningTimeline = ({ stages, className }: LearningTimelineProps) => {
  return (
    <div className={`${className} w-full max-w-xl mx-auto`}>
      <Timeline>
        {stages.map((stage, index) => (
          <TimelineItem key={index}>
            <TimelineConnector />
            <TimelineHeader>
              <TimelineIcon className="p-2">
                <stage.icon className={`h-5 w-5 ${stage.iconColorClass}`} />
              </TimelineIcon>
              <Typography
                variant="h5"
                color="blue-gray"
                placeholder={undefined}
                className="font-taipei"
              >
                {stage.title}
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography
                color="gray"
                className="font-normal text-gray-600 font-taipei"
                placeholder={undefined}
              >
                {stage.description}
              </Typography>
            </TimelineBody>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default LearningTimeline;

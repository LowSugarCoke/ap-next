import {
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Card,
  Typography,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { teachers } from "./data";
import "../../app/globals.css";

export function ListWithAvatar() {
  const [showAll, setShowAll] = useState(false);

  const displayedTeachers = showAll ? teachers : teachers.slice(0, 3);

  return (
    <Card
      placeholder={undefined}
      className="w-full max-w-4xl mx-auto my-10 p-5 md:p-10 border border-gray-200 rounded-lg relative"
    >
      <h1 className="font-taipei-bold text-center m-10 text-3xl">
        專業師資團隊
      </h1>

      <List placeholder={undefined} className="relative">
        {displayedTeachers.map((teacher, index) => (
          <ListItem
            placeholder={undefined}
            key={index}
            className="flex flex-col items-center md:flex-row md:items-center text-center md:text-left mt-6"
          >
            <ListItemPrefix
              placeholder={undefined}
              className="mb-4 md:mb-0 md:mr-4"
            >
              <Avatar
                placeholder={undefined}
                className="h-16 w-16 rounded-full object-cover object-center mx-auto font-taipei"
                alt={teacher.name}
                src={teacher.imageUrl}
              />
            </ListItemPrefix>
            <div className="flex-grow">
              <Typography
                placeholder={undefined}
                variant="h6"
                color="blue-gray"
                className="font-taipei"
              >
                {teacher.name}
                {teacher.role.map((role, roleIndex) => (
                  <span
                    key={roleIndex}
                    className="block md:inline-block md:ml-2 font-taipei"
                  >
                    @{role}
                  </span>
                ))}
              </Typography>
              <Typography
                placeholder={undefined}
                color="gray"
                className="font-normal font-taipei"
              >
                課程:
                {teacher.class.map((teachClass, classIndex) => (
                  <span key={classIndex} className="ml-1">
                    {teachClass}
                    {classIndex < teacher.class.length - 1 ? ", " : ""}
                  </span>
                ))}
              </Typography>
            </div>
          </ListItem>
        ))}
        {!showAll && (
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
        )}
      </List>

      <div className="text-center">
        <button
          className="mx-auto my-4 text-blue-500 hover:text-blue-700 focus:outline-none"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "收起" : "查看所有師資"}
        </button>
      </div>
    </Card>
  );
}

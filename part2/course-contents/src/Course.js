import React from "react";

const Course = ({ course }) => {
  const Total = ({ parts }) => {
    const total = parts.reduce((s, p) => p.exercises + s, 0);
    return (
      <p>
        Total number of exercises <b>{total}</b>{" "}
      </p>
    );
  };

  const Header = ({ parts }) => {
    return <h1>{course.name}</h1>;
  };

  const Part = ({ part }) => {
    return (
      <p>
        {part.name} {part.exercises}
      </p>
    );
  };

  const Content = ({ parts }) => {
    return (
      <div>
        {parts.map(part => (
          <Part key={part.id} part={part} />
        ))}
      </div>
    );
  };
  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default Course;

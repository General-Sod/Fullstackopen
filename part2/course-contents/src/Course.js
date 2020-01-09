import React from "react";

const Header = ({ course }) => {
  return <h1> {course.name}</h1>;
};

const Total = ({ parts }) => {
  const total = parts.reduce((s, p) => p.exercises + s, 0);

  return <p>total of {total} exercises</p>;
};

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Content = ({ parts }) => (
  <div>
    {parts.map(part => (
      <Part key={part.id} part={part} />
    ))}
  </div>
);

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default Course;

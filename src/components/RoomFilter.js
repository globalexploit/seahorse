import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "../components/Title";
//get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

export default function RoomFilter({ rooms }) {
  const context = useContext(RoomContext);
  console.log(context);
  const {
    handleChange,
    type,
    capacity,
    location,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    wifi,
    generator,
  } = context;
  //get unique types
  let types = getUnique(rooms, "type");
  //add all
  types = ["all", ...types];
  //map to jsx
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  //get unique location
  let locations = getUnique(rooms, "location");
  //add all
  locations = ["all", ...locations];
  //map to jsx
  locations = locations.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  let people = getUnique(rooms, "capacity");
  people = people.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* end select type */}

        {/* select location */}
        <div className="form-group">
          <label htmlFor="location">location</label>
          <select
            name="location"
            id="location"
            value={location}
            className="form-control"
            onChange={handleChange}
          >
            {locations}
          </select>
        </div>
        {/* end select type */}

        {/* guest type */}
        <div className="form-group">
          <label htmlFor="capacity">Bedroom</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {people}
          </select>
        </div>
        {/* end guest type */}
        {/* room price */}
        <div className="form-group">
          <label htmlFor="price">room price &#8358;{price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/* end of room price */}
        {/* size */}
        <div className="form-group">
          <label htmlFor="size">room size SQ'FT</label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              id="size"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              id="size"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>
        {/* end of size */}
        {/* extras */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="wifi"
              id="wifi"
              checked={wifi}
              onChange={handleChange}
            />
            <label htmlFor="wifi">wifi</label>
          </div>

          <div className="single-extra">
            <input
              type="checkbox"
              name="generator"
              id="generator"
              checked={generator}
              onChange={handleChange}
            />
            <label htmlFor="generator">generator</label>
          </div>
        </div>
        {/* end of extras */}
      </form>
    </section>
  );
}

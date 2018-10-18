import moment from "moment";

export default (time) => {
    let newString = moment(time)
      ._d.toString()
      .substring(0, 15);
    return newString;
  };

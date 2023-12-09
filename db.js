const gns = require("./questions/gns");
const chm = require("./questions/chm");
const mcb = require("./questions/mcb");
const bch = require("./questions/bch");
const csc = require("./questions/csc");

module.exports = () => {
  const data = {
    mcb,
    chm,
    csc,
    bch,
    gns,
  };

  return data;
};

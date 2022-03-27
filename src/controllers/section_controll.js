const express = require("express");

const router = express.Router()
const Section = require("../models/section_model");

// router.get("/", async (req, res) => {
//     try {
//       const section = await Section.find().populate("bookId").lean().exec();
  
//       return res.status(200).send({ section: section });
//     } catch (err) {
//       return res
//         .status(500)
//         .send({ message: "Something went wrong .. try again later" });
//     }
//   });
  
  router.post("/", async (req, res) => {
    try {
      const section = await Section.create(req.body);
  
      return res.status(201).send(section);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });

  
  // router.get("/:id", async (req, res) => {
  //   try {
  //     const section = await Author.findById(req.params.id).lean().exec();
  //     return res.status(200).send(section); // []
  //   } catch (err) {
  //     return res
  //       .status(500)
  //       .send({ message: "Something went wrong .. try again later" });
  //   }
  // });

  module.exports = router;

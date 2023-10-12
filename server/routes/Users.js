const jwt = require('jsonwebtoken');
//BCRYPT FOR ENCRYPTING
const bcrypt = require('bcryptjs');
const express = require('express');
const router = express.Router();
const Users = require("../models/Users");

router.post("/register", async (req, res) => {
    const { fullname, gender, email, position, username } = req.body;
    const role = "user";
    const isActive = "true";
    const password = bcrypt.hashSync(req.body.password, 10);

    let user = await Users.findOne({ username });
    if (user) {
        return res.status(400).send("Username already taken");
    }
    user = new Users({fullname, gender, email, position, username, password, role, isActive });
    await user.save();

    const jwtdata = { username: user.username, position: user.position };
    const token = jwt.sign(jwtdata, process.env.JWT_CODE, { expiresIn: "5m" });
    res.send(token);
})

router.get("/view", async (req, res) => {
    Users.find()
      .then((items) => res.json(items))
      .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/dashboard", async (req, res) => {
    try {
      const aggregation = [
        {
          $group: {
            _id: null,
            totalEmployees: { $sum: 1 },
            males: {
              $sum: { $cond: [{ $eq: ["$gender", "male"] }, 1, 0] }
            },
            females: {
              $sum: { $cond: [{ $eq: ["$gender", "female"] }, 1, 0] }
            },
            webDevelopers: {
              $sum: { $cond: [{ $eq: ["$position", "Web Developer"] }, 1, 0] }
            },
            uiUxDesigners: {
              $sum: { $cond: [{ $eq: ["$position", "UI/UX Designer"] }, 1, 0] }
            },
            qaTesters: {
              $sum: { $cond: [{ $eq: ["$position", "QA Tester"] }, 1, 0] }
            }
          }
        }
      ];
  
      const result = await Users.aggregate(aggregation);
      res.json(result[0]); // Assuming you want to send the result as a single JSON object
    } catch (err) {
      res.status(400).json("Error: " + err);
    }
  });
  
  
router.post("/add", async (req, res) => {

    const { fullname, gender, email, position, username } = req.body;
    const role = "user";
    const isActive = "true";
    const password = bcrypt.hashSync(req.body.password, 10);
    const user = new Users({ fullname, gender, email, position, username, password, role, isActive });
    await user.save()
    .then(() => {
        res.send("User added!");
    })
    .catch((err) => {
        res.send(err + "\nFailed to add user!");
    })
});

router.put("/edit/:id", async (req, res) => {
    Users.findByIdAndUpdate({ _id: req.params.id }, {
        fullname: req.body.name,
        gender: req.body.gender,
        email: req.body.email,
        position: req.body.position,
        username: req.body.username,
        password: req.body.password,
        role: req.body.role,
        isActive: req.body.isActive
    })
    .then(() => {
        res.send("User updated successfully!");
    })
    .catch((err) => res.send(err + "\nFailed to update user!"));
});

router.delete('/delete/:id', async (req, res) => {
    await Users.findByIdAndRemove({ _id: req.params.id})
        .then((doc) => res.send("user deleted successfully!"))
        .catch((err) => res.send(err + "\nFailed to delete user!"));
});

// router.get("/view-user/:staffID", async (req, res) => {
//     const { staffID } = req.params;
  
//     Task.find({staffID: staffID, $or: [{ isArchived: { $exists: false } }, { isArchived: false }]})
//         .then((items) => res.json(items))
//         .catch((err) => res.status(400).json("Error: " + err));
//   });
  

// router.put("/edit-status/:id", async (req, res) => {
//     const currentDate = new Date();
//     Task.findByIdAndUpdate({ _id: req.params.id }, {
//         taskStatus: req.body.taskStatus,
//         taskAccomplishDate: currentDate
//     })
//     .then(() => {
//         res.send("Task updated successfully");
//     })
//     .catch((err) => res.send(err + "\nFailed to update task"));
// });

// router.put("/overdue/:userId", async (req, res) => {
//     const { userId } = req.params;
//     const currentDate = new Date();
  
//     Task.updateMany(
//       { staffID: userId, taskDueDate: { $lt: currentDate }, taskStatus: { $ne: "Completed" } },
//       {
//         taskStatus: "Overdue",
//       }
//     )
//       .then(() => {
//         res.send("Tasks updated successfully");
//       })
//       .catch((err) => res.send(err + "\nFailed to update tasks"));
//   });
     

// router.put("/archive/:id", async (req, res) => {
//     Task.findByIdAndUpdate({ _id: req.params.id }, {
//         isArchived: true
//     })
//     .then(() => {
//         res.send("Task archived successfully");
//     })
//     .catch((err) => res.send(err + "\nFailed to archive task"));
// });

// router.put("/restore/:id", async (req, res) => {
//     Task.findByIdAndUpdate({ _id: req.params.id }, {
//         isArchived: false
//     })
//     .then(() => {
//         res.send("Task restored successfully");
//     })
//     .catch((err) => res.send(err + "\nFailed to restore task"));
// });

//     router.get("/view", async (req, res) => {
//     Users.find()
//     .then((items) => res.json(items))
//     .catch((err) => res.status(400).json("error:" + err ))
// });

module.exports = router;
const express=require("express")
const { getAllApps, createApps, editApps, deleteApp, getOneApp } = require("../controllers/appControllers")


const router=express.Router()

router.route("/app").get(getAllApps)
router.route("/app/create").post(createApps)
router.route("/app/edit/:id").put(editApps)
router.route("/app/delete/:id").delete(deleteApp)
router.route("/app/:id").get(getOneApp)

const appRouter=router
module.exports = appRouter

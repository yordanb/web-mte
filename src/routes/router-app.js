const router = require("express").Router();
const homeController = require("../controllers").home;
const profileController = require("../controllers").profile;
const verifyUser = require("../configs/verify");
const settingController = require("../controllers").setting;
const mapController = require("../controllers").map;
const dashboardController = require("../controllers").dashboard;

router.get("/", verifyUser.isLogin, homeController.home);
router.get("/profile", verifyUser.isLogin, profileController.profile);
router.get("/setting", verifyUser.isLogin, settingController.setting);
router.get("/map", verifyUser.isLogin, mapController.map);
router.get("/dashboard", verifyUser.isLogin, dashboardController.dashboard);

module.exports = router;

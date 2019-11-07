/**
 * @api {get} /user/list Get List User
 * @apiVersion 0.1.0
 * @apiName GetListUser
 * @apiGroup User
 * @apiParam {Int32} page Number of page.
 * @apiParam {Int32} limit Number of items in one page .
 * @apiParamExample {Int32} Example:
 *     {
 *       "page": 1,
 *       "limit": 1
 *     }
 * 
 * @apiSuccess {Object} list List of User.
 * @apiSuccessExample Success-Response:
 *  {
 *      create_uid: "5d679819325ab70ab0157ce5",
 *      create_date: "2019-10-08T06:57:06.450Z",
 *      write_uid: "5d679819325ab70ab0157ce5",
 *      write_date: "2019-10-08T06:57:06.450Z",
 *      company_id: "",
 *      status: true,
 *      delete_uid: null,
 *      email: "",
 *      partner_id: "",
 *      lang_id: "",
 *      gmt_offset: "0.0",
 *      date_format: "",
 *      time_format: "",
 *      thousands_sep: "",
 *      decimal_point: "",
 *      avatar: "",
 *      type: "",
 *      inactive: false,
 *      renew_password_id: "",
 *      online: 0,
 *      user_referral_code: "ATC045",
 *      save_product: [
 *          "710801-P10.17"
 *      ],
 *      save_project: [ ],
 *      referral_code: "AAA012",
 *      fb_id: null,
 *      google_id: null,
 *      list_referral_user: [
 *          "5da4260ba3addc5841969a8c"
 *      ],
 *      _id: "5d9c3342cc1f7b3f4c8e79dd",
 *      delete_id: "",
 *      first_name: "Duong Cong ",
 *      last_name: "Vu",
 *      phone: "0123123123",
 *      password: "$2b$10$.e12Oy.hu4e94uaNzmbhJOPmobDtZeagEH6WMD7uU0DInxCU/Vhgi",
 *      __v: 9,
 *      country_code: 84,
 *      working_area: "Quận 11, Tp HCM",
 *      address: "1011 3 tháng 2, Quận 11, Tp HCM",
 *      followers: [ ]
 *  }
 */



 /**
 * @api {post} /user/add Add New User
 * @apiVersion 0.1.0
 * @apiName AddNewUser
 * @apiGroup User
 * @apiParam {Boolean} status User Status.
 * @apiParam {ObjectId} delete_id User Delete ID.
 * @apiParam {String} Email User Email.
 * @apiParam {ObjectId} partner_id User Partner ID.
 * @apiParam {String} lang_id User Language ID.
 * @apiParam {String} gmt_offset User GMT Offset.
 * @apiParam {Date} date_format User Date Format.
 * @apiParam {String} thousands_sep User Thousands Separators.
 * @apiSuccess {String} avatar User Avatar.
 * @apiSuccess {String} type User Type.
 * @apiSuccess {Boolean} inactive User Inactive Status.
 * @apiSuccess {String} decimal_point User Point.
 * @apiSuccess {String} renew_password_id User Renew Password ID.
 * @apiSuccess {Number} online User Online.
 * @apiSuccess {String} user_referral_code User Referral Code.
 * @apiSuccess {Array} save_product User Save Product.
 * @apiSuccess {Array} save_project User Save Project.
 * @apiSuccess {String} referral_code Referral Code.
 * @apiSuccess {String} phone User Phone Number.
 * @apiSuccess {String} fb_id User Facebook ID.
 * @apiSuccess {String} google_id User Google ID.
 * @apiSuccess {Object} list_referral_user List Referral User.
 * @apiParamExample {json} Request-Example:
 *     {
 *          create_uid: "5d679819325ab70ab0157ce5",
 *          create_date: "2019-10-08T06:57:06.450Z",
 *          write_uid: "5d679819325ab70ab0157ce5",
 *          write_date: "2019-10-08T06:57:06.450Z",
 *          company_id: "",
 *          status: true,
 *          delete_uid: null,
 *          email: "",
 *          partner_id: "",
 *          lang_id: "",
 *          gmt_offset: "0.0",
 *          date_format: "",
 *          time_format: "",
 *          thousands_sep: "",
 *          decimal_point: "",
 *          avatar: "",
 *          type: "",
 *          inactive: false,
 *          renew_password_id: "",
 *          online: 0,
 *          user_referral_code: "ATC045",
 *          save_product: [
 *              "710801-P10.17"
 *          ],
 *          save_project: [ ],
 *          referral_code: "AAA012",
 *          fb_id: null,
 *          google_id: null,
 *          list_referral_user: [
 *              "5da4260ba3addc5841969a8c"
 *          ],
 *          _id: "5d9c3342cc1f7b3f4c8e79dd",
 *          delete_id: "",
 *          first_name: "Duong Cong ",
 *          last_name: "Vu",
 *          phone: "0123123123",
 *          password: "$2b$10$.e12Oy.hu4e94uaNzmbhJOPmobDtZeagEH6WMD7uU0DInxCU/Vhgi",
 *          __v: 9,
 *          country_code: 84,
 *          working_area: "Quận 11, Tp HCM",
 *          address: "1011 3 tháng 2, Quận 11, Tp HCM",
 *          followers: [ ]
 *     }
 * @apiSuccessExample Success-Response-Data:
 *  [
 *     HTTP/1.1 200 OK
 *  ]
 */



 /**
 * @api {get} /user/count Count Number Of User
 * @apiVersion 0.1.0
 * @apiName CountNumberOfUser
 * @apiGroup User
 * @apiSuccess {Int32} number Number of User.
 * @apiSuccessExample Success-Response-Data:
 *  {
 *    17
 *  }
 */



 /**
 * @api {get} /user/detail Get User Detail 
 * @apiVersion 0.1.0
 * @apiName GetUserDetail
 * @apiGroup User
 * @apiParam {ObjectID} id ID of user .
 * @apiParamExample Example:
 *     {
 *       "id": "5d9c3342cc1f7b3f4c8e79dd"
 *     }
 * 
 * @apiSuccess {Object} list List of Recruit.
 * @apiSuccessExample Success-Response:
 *  {
 *      create_uid: "5d679819325ab70ab0157ce5",
 *      create_date: "2019-10-08T06:57:06.450Z",
 *      write_uid: "5d679819325ab70ab0157ce5",
 *      write_date: "2019-10-08T06:57:06.450Z",
 *      company_id: "",
 *      status: true,
 *      delete_uid: null,
 *      email: "",
 *      partner_id: "",
 *      lang_id: "",
 *      gmt_offset: "0.0",
 *      date_format: "",
 *      time_format: "",
 *      thousands_sep: "",
 *      decimal_point: "",
 *      avatar: "",
 *      type: "",
 *      inactive: false,
 *      renew_password_id: "",
 *      online: 0,
 *      user_referral_code: "ATC045",
 *      save_product: [
 *      "710801-P10.17",
 *      "710801-P10.121",
 *      "710801-P10.164"
 *      ],
 *      save_project: [ ],
 *      referral_code: "AAA012",
 *      fb_id: null,
 *      google_id: null,
 *      list_referral_user: [
 *      "5da4260ba3addc5841969a8c"
 *      ],
 *      _id: "5d9c3342cc1f7b3f4c8e79dd",
 *      delete_id: "",
 *      first_name: "Duong Cong ",
 *      last_name: "Vu",
 *      phone: "0123123123",
 *      password: "$2b$10$.e12Oy.hu4e94uaNzmbhJOPmobDtZeagEH6WMD7uU0DInxCU/Vhgi",
 *      __v: 27,
 *      country_code: 84,
 *      working_area: "Quận 11, Tp HCM",
 *      address: "1011 3 tháng 2, Quận 11, Tp HCM",
 *      followers: [ ]
 *  }
 */



 /**
 * @api {put} /user/edit Edit User
 * @apiVersion 0.1.0
 * @apiName EditUser
 * @apiGroup User
 * @apiParam {ObjectID} id User ID.
 * @apiParam {String} name Recruit Name.
 * @apiParamExample {json} Request-Example:
 *     {
 *       "id": "5d9c3342cc1f7b3f4c8e79dd",
 *       "first_name": "Hứa Văn "
 *     } 
 * @apiSuccessExample Success-Response-Data:
 *  [
 *     HTTP/1.1 200 OK
 *  ]
 */


 /**
 * @api {delete} /user/delete Delete User
 * @apiVersion 0.1.0
 * @apiName DeleteUser
 * @apiGroup User
 * @apiParam {ObjectID} id User ID.
 * @apiParamExample {json} Request-Example:
 *     {
 *       "id": "5d9c3342cc1f7b3f4c8e79dd"
 *     } 
 * @apiSuccessExample Success-Response-Data:
 *  [
 *     HTTP/1.1 200 OK
 *  ]
 */
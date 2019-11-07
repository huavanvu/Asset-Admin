 /**
 * @api {get} role/user_company/list Get List User Company
 * @apiVersion 0.1.0
 * @apiName GetListUserCompany
 * @apiGroup User Company Role
 * @apiParam {Int32} page Number of page.
 * @apiParam {Int32} limit Number of items in one page .
 * @apiParamExample Example:
 *     {
 *       "page": 1,
 *       "limit": 1
 *     }
 * @apiSuccess {Object} list List of User Company.
 * @apiSuccessExample Success-Response:
 *  [
 *      {
 *          _id: "5d9d991050d9ad34b4db2e8d",
 *          company: {
 *              _id: "5d9ae33a6c872036a4b2d47f",
 *              name: "Asset 1"
 *          },
 *          group: [
 *              {
 *                  _id: "5d9d94fe93d1b678bbe3568a",
 *                  create_date: "2019-10-09T08:23:21.747Z",
 *                  write_date: "2019-10-09T08:23:21.747Z",
 *                  company_id: null,
 *                  status: true,
 *                  delete_id: null,
 *                  group_name: "Admin",
 *                  code: "AD",
 *                  permission_id: [
 *                      "5d9e98dda3addc584118bd81"
 *                  ],
 *                  module_id: [
 *                      "5daeaf2da3a60236c43699fd",
 *                      "5d9d95ada3addc5841bc357e",
 *                      "5d9c0322a3addc58419d9913",
 *                      "5d9c04b7a3addc58419fb82e",
 *                      "5d9c054fa3addc5841a0867a",
 *                      "5d9c0632a3addc5841a1b502",
 *                      "5d9c0524a3addc5841a0489b",
 *                      "5d9c05e6a3addc5841a153f0",
 *                      "5d9c05fda3addc5841a1704e",
 *                      "5d9c070fa3addc5841a2e3fd",
 *                      "5d9c05a2a3addc5841a0f46d",
 *                      "5d9c05b3a3addc5841a10ffb",
 *                      "5d9c0754a3addc5841a33e2a",
 *                      "5d9c0724a3addc5841a2ffa7",
 *                      "5d9c0702a3addc5841a2cfaa",
 *                      "5d9c0736a3addc5841a314c6",
 *                      "5d9c45eba3addc5841f7c1b6",
 *                      "5d9c45c6a3addc5841f7918b",
 *                      "5d9c4315a3addc5841f3f165",
 *                      "5d9c069aa3addc5841a24586",
 *                      "5d9c06a9a3addc5841a25a36",
 *                      "5d9c0646a3addc5841a1d094",
 *                      "5d9c04f6a3addc5841a00ab5",
 *                      "5db12583a3a60236c439e0cd",
 *                      "5db15da7a3a60236c43aaa26",
 *                      "5db2aa23a3a60236c43d36bf",
 *                      "5db2aa4ea3a60236c43d3756"
 *                  ]
 *              },
 *              {
 *                  _id: "5db12ac3a3a60236c439f618",
 *                  create_date: "2019-10-09T08:23:21.747Z",
 *                  write_date: "2019-10-09T08:23:21.747Z",
 *                  company_id: null,
 *                  status: true,
 *                  delete_id: null,
 *                  group_name: "Asset data",
 *                  code: "DAT",
 *                  permission_id: [ ],
 *                  module_id: [
 *                      "5d9c05e6a3addc5841a153f0",
 *                      "5d9c05fda3addc5841a1704e",
 *                      "5d9c0632a3addc5841a1b502",
 *                      "5d9c0646a3addc5841a1d094"
 *                  ]
 *              }
 *          ],
 *          user: {
 *              _id: "5d9c3342cc1f7b3f4c8e79dd",
 *              create_uid: "",
 *              write_uid: "",
 *              company_id: "",
 *              status: true,
 *              delete_id: "",
 *              email: "",
 *              partner_id: "",
 *              lang_id: "",
 *              gmt_offset: "0.0",
 *              date_format: "",
 *              time_format: "",
 *              thousands_sep: "",
 *              decimal_point: "",
 *              avatar: "",
 *              type: "",
 *              inactive: false,
 *              renew_password_id: "",
 *              online: 0,
 *              user_referral_code: "ATC045",
 *              save_product: [ ],
 *              save_project: [ ],
 *              referral_code: "ATC046",
 *              fb_id: null,
 *              google_id: null,
 *              list_referral_user: [
 *                  "5da3eb917a808c2cb00b67f6"
 *              ],
 *              first_name: "Duong Cong ",
 *              last_name: "Vu",
 *              phone: "0123123123",
 *              password: "$2b$10$.e12Oy.hu4e94uaNzmbhJOPmobDtZeagEH6WMD7uU0DInxCU/Vhgi",
 *              create_date: "2019-10-08T06:57:06.450Z",
 *              write_date: "2019-10-08T06:57:06.450Z",
 *              __v: 0,
 *              country_code: 84
 *          }
 *      }
 * ]
 */



/**
 * @api {get} role/user_company/count Count Number Of User Company
 * @apiVersion 0.1.0
 * @apiName CountNumberOfUserCompany
 * @apiGroup Role User Company
 * @apiSuccess {Int32} number Number of Resource.
 * @apiSuccessExample Success-Response-Data:
 *  {
 *    9
 *  }
 */



 /**
 * @api {post} /role/user_company/add Add New User Company
 * @apiVersion 0.1.0
 * @apiName AddNewUserCompany
 * @apiGroup Role User Company
 * @apiParam {Boolean} status User Company Status.
 * @apiParam {ObjectId} delete_id User Company Delete ID.
 * @apiParam {String} position User Company Position.
 * @apiParam {ObjectId} company_id User Company ID.
 * @apiParam {ObjectID} group_id User Company Group ID.
 * @apiParam {ObjectID} user_id Company User ID.
 * @apiParamExample {json} Request-Example:
 *     {
 *          "_id" : ObjectId("5d9d991050d9ad34b4db2e8d"),
 *          "create_date" : ISODate("2019-10-09T08:23:21.747Z"),
 *          "write_date" : ISODate("2019-10-09T08:23:21.747Z"),
 *          "company_id" : ObjectId("5d9ae33a6c872036a4b2d47f"),
 *          "status" : true,
 *          "delete_id" : null,
 *          "group_id" : [ 
 *              ObjectId("5d9d94fe93d1b678bbe3568a"), 
 *              ObjectId("5db12ac3a3a60236c439f618")
 *          ],
 *          "user_id" : ObjectId("5d9c3342cc1f7b3f4c8e79dd"),
 *          "lang_id" : null,
 *          "__v" : 0
 *     }
 * @apiSuccessExample Success-Response-Data:
 *  [
 *     HTTP/1.1 200 OK
 *  ]
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "status": "false"
 *     }
 */
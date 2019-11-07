 /**
 * @api {get} /role/list_module_category Get List Module Category
 * @apiVersion 0.1.0
 * @apiName GetListModuleCategory
 * @apiGroup Role
 * @apiSuccess {Object} list List of Role.
 * @apiSuccessExample Success-Response:
 *  [
 *      {
 *          create_uid: null,
 *          create_date: "2019-10-06T07:35:36.812Z",
 *          write_uid: null,
 *          write_date: null,
 *          company_id: "ROOT",
 *          status: true,
 *          delete_id: null,
 *          description: "",
 *          sequence: 0,
 *          keyword: "",
 *          _id: "5d9c0264a3addc58419c9409",
 *          name: "Quy hoạch",
 *          code: "PLANNING",
 *          icon: "radius-upright",
 *          parent_id: null,
 *          __v: 0
 *      }
 *      {...},
 *      {...},
 *      {...}
 *  ]
 */



  /**
 * @api {get} /role/list_module Get List Module
 * @apiVersion 0.1.0
 * @apiName GetListModule
 * @apiGroup Role
 * @apiParam {ObjectID} category_id Module Category ID.
 * @apiParamExample Example:
 *     {
 *       "category_id": "5d9c0322a3addc58419d9913"
 *     }
 * @apiSuccess {Object} list List of Module.
 * @apiSuccessExample Success-Response:
 *  [
 *      {
 *          create_uid: null,
 *          create_date: "2019-10-06T07:35:36.812Z",
 *          write_uid: null,
 *          write_date: null,
 *          company_id: "ROOT",
 *          status: true,
 *          delete_id: null,
 *          _id: "5d9c0322a3addc58419d9913",
 *          description: "",
 *          keyword: "",
 *          url: "/project/category",
 *          name: "Danh mục Dự án",
 *          code: "PROJECT_CATEGORY",
 *          sequence: 0,
 *          icon: "",
 *          category_id: "5d9c0322a3addc58419d9913",
 *          parent_id: null,
 *          __v: 0,
 *          type: "MENU",
 *          category: {
 *              create_uid: null,
 *              create_date: "2019-10-06T07:35:36.812Z",
 *              write_uid: null,
 *              write_date: null,
 *              company_id: "ROOT",
 *              status: true,
 *              delete_id: null,
 *              description: "",
 *              sequence: 0,
 *              keyword: "",
 *              _id: "5d9c0322a3addc58419d9913",
 *              name: "Dự án",
 *              code: "PROJECT",
 *              icon: "snippets",
 *              parent_id: null,
 *              __v: 0
 *          },
 *          id: "5d9c0322a3addc58419d9913"
 *      }
 *      {...},
 *      {...},
 *      {...}
 * ]
 * @apiError CategoryIdIsNotValid The <code>id</code> of Module Category is not valid.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "status": "false",
 *       "message": "category_id is not valid"
 *     }
 */



 /**
 * @api {get} /role/list Get Group List
 * @apiVersion 0.1.0
 * @apiName GetGroupList
 * @apiGroup Role
 * @apiSuccess {Object} list Group List.
 * @apiSuccessExample Success-Response:
 *  [
 *      {
 *          create_uid: null,
 *          create_date: "2019-10-09T08:23:21.747Z",
 *          write_uid: null,
 *          write_date: "2019-10-09T08:23:21.747Z",
 *          company_id: null,
 *          status: true,
 *          delete_id: null,
 *          permission_id: [
 *              "5d9e98dda3addc584118bd81"
 *          ],
 *          module_id: [
 *              "5daeaf2da3a60236c43699fd",
 *              "5d9d95ada3addc5841bc357e",
 *              "5d9c0322a3addc58419d9913",
 *              "5d9c04b7a3addc58419fb82e",
 *              "5d9c054fa3addc5841a0867a",
 *              "5d9c0632a3addc5841a1b502",
 *              "5d9c0524a3addc5841a0489b",
 *              "5d9c05e6a3addc5841a153f0",
 *              "5d9c05fda3addc5841a1704e",
 *              "5d9c070fa3addc5841a2e3fd",
 *              "5d9c05a2a3addc5841a0f46d",
 *              "5d9c05b3a3addc5841a10ffb",
 *              "5d9c0754a3addc5841a33e2a",
 *              "5d9c0724a3addc5841a2ffa7",
 *              "5d9c0702a3addc5841a2cfaa",
 *              "5d9c0736a3addc5841a314c6",
 *              "5d9c45eba3addc5841f7c1b6",
 *              "5d9c45c6a3addc5841f7918b",
 *              "5d9c4315a3addc5841f3f165",
 *              "5d9c069aa3addc5841a24586",
 *              "5d9c06a9a3addc5841a25a36",
 *              "5d9c0646a3addc5841a1d094",
 *              "5d9c04f6a3addc5841a00ab5",
 *              "5db12583a3a60236c439e0cd",
 *              "5db15da7a3a60236c43aaa26",
 *              "5db2aa23a3a60236c43d36bf",
 *              "5db2aa4ea3a60236c43d3756"
 *          ],
 *          _id: "5d9d94fe93d1b678bbe3568a",
 *          group_name: "Admin",
 *          code: "AD",
 *          permission: [ ],
 *          module: [
 *              {
 *                  create_uid: null,
 *                  create_date: "2019-10-06T07:35:36.812Z",
 *                  write_uid: null,
 *                  write_date: null,
 *                  company_id: "ROOT",
 *                  status: true,
 *                  delete_id: null,
 *                  _id: "5daeaf2da3a60236c43699fd",
 *                  description: "",
 *                  keyword: "",
 *                  url: "/role",
 *                  name: "Phân quyên",
 *                  code: "ROLE",
 *                  sequence: 0,
 *                  icon: "",
 *                  category_id: "5daeaefca3a60236c436996e",
 *                  parent_id: null,
 *                  __v: 0,
 *                  type: "MENU",
 *                  id: "5daeaf2da3a60236c43699fd"
 *              },
 *              {...},
 *              {...},
 *              {...}
 *          ],
 *          id: "5d9d94fe93d1b678bbe3568a"
 *      },
 *      {...},
 *      {...},
 *      {...}
 * ]
 */


 /**
 * @api {get} /role/group_count Count Number Of Group
 * @apiVersion 0.1.0
 * @apiName CountNumberOfGroup
 * @apiGroup Role
 * @apiSuccess {Int32} number Number of Group.
 * @apiSuccessExample Success-Response-Data:
 *  {
 *    12
 *  }
 */



 /**
 * @api {post} /role/group_add Add New User Group
 * @apiVersion 0.1.0
 * @apiName AddNewUserGroup
 * @apiGroup Role
 * @apiParam {Boolean} status User Group Status.
 * @apiParam {ObjectId} delete_id User Group Delete ID.
 * @apiParam {String} group_name User Group Name.
 * @apiParam {ObjectId} permission_id Permission User Group ID.
 * @apiParam {ObjectId} module_id Module User Group ID.
 * @apiParamExample {json} Request-Example:
 *     {
 *          "_id" : ObjectId("5d9d94fe93d1b678bbe3568a"),
 *          "create_date" : ISODate("2019-10-09T08:23:21.747Z"),
 *          "write_date" : ISODate("2019-10-09T08:23:21.747Z"),
 *          "company_id" : null,
 *          "status" : true,
 *          "delete_id" : null,
 *          "group_name" : "Admin",
 *          "code" : "AD",
 *          "permission_id" : [ 
 *              ObjectId("5d9e98dda3addc584118bd81")
 *          ],
 *          "module_id" : [ 
 *              ObjectId("5daeaf2da3a60236c43699fd"), 
 *              ObjectId("5d9d95ada3addc5841bc357e"), 
 *              ObjectId("5d9c0322a3addc58419d9913"), 
 *              ObjectId("5d9c04b7a3addc58419fb82e"), 
 *              ObjectId("5d9c054fa3addc5841a0867a"), 
 *              ObjectId("5d9c0632a3addc5841a1b502"), 
 *              ObjectId("5d9c0524a3addc5841a0489b"), 
 *              ObjectId("5d9c05e6a3addc5841a153f0"), 
 *              ObjectId("5d9c05fda3addc5841a1704e"), 
 *              ObjectId("5d9c070fa3addc5841a2e3fd"), 
 *              ObjectId("5d9c05a2a3addc5841a0f46d"), 
 *              ObjectId("5d9c05b3a3addc5841a10ffb"), 
 *              ObjectId("5d9c0754a3addc5841a33e2a"), 
 *              ObjectId("5d9c0724a3addc5841a2ffa7"), 
 *              ObjectId("5d9c0702a3addc5841a2cfaa"), 
 *              ObjectId("5d9c0736a3addc5841a314c6"), 
 *              ObjectId("5d9c45eba3addc5841f7c1b6"), 
 *              ObjectId("5d9c45c6a3addc5841f7918b"), 
 *              ObjectId("5d9c4315a3addc5841f3f165"), 
 *              ObjectId("5d9c069aa3addc5841a24586"), 
 *              ObjectId("5d9c06a9a3addc5841a25a36"), 
 *              ObjectId("5d9c0646a3addc5841a1d094"), 
 *              ObjectId("5d9c04f6a3addc5841a00ab5"), 
 *              ObjectId("5db12583a3a60236c439e0cd"), 
 *              ObjectId("5db15da7a3a60236c43aaa26"), 
 *              ObjectId("5db2aa23a3a60236c43d36bf"), 
 *              ObjectId("5db2aa4ea3a60236c43d3756")
 *          ]
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



 /**
 * @api {get} /role/group_detail Get User Group Detail 
 * @apiVersion 0.1.0
 * @apiName GetUserGroupDetail
 * @apiGroup Role
 * @apiParam {ObjectID} id ID of user group item .
 * @apiParamExample Example:
 *     {
 *       "id": "5dafadc4a3a60236c437ad34"
 *     }
 * 
 * @apiSuccess {Object} Resource Detail.
 * @apiSuccessExample Success-Response:
 *  {
 *      create_uid: null,
 *      create_date: "2019-10-09T08:23:21.747Z",
 *      write_uid: null,
 *      write_date: "2019-10-09T08:23:21.747Z",
 *      company_id: null,
 *      status: true,
 *      delete_id: null,
 *      permission_id: [
 *          "5d9e98dda3addc584118bd81"
 *      ],
 *      module_id: [
 *          "5db15da7a3a60236c43aaa26",
 *          "5db12583a3a60236c439e0cd",
 *          "5daeaf2da3a60236c43699fd",
 *          "5db2aa23a3a60236c43d36bf"
 *      ],
 *      _id: "5dafadc4a3a60236c437ad34",
 *      group_name: "Cộng tác viên",
 *      code: "CTV",
 *      permission: [ ],
 *      module: [
 *          {
 *              create_uid: null,
 *              create_date: "2019-10-06T07:35:36.812Z",
 *              write_uid: null,
 *              write_date: null,
 *              company_id: "ROOT",
 *              status: true,
 *              delete_id: null,
 *              _id: "5db15da7a3a60236c43aaa26",
 *              description: "",
 *              keyword: "",
 *              url: "/user_company",
 *              name: "Người dùng công ty",
 *              code: "USER_COMPANY",
 *              sequence: 0,
 *              icon: "",
 *              category_id: "5daeaefca3a60236c436996e",
 *              parent_id: null,
 *              __v: 0,
 *              type: "MENU",
 *              id: "5db15da7a3a60236c43aaa26"
 *          },
 *      {...},
 *      {...},
 *      {...}
 *      ],
 *      id: "5dafadc4a3a60236c437ad34"
 *  }
 */



 /**
 * @api {delete} /role/delete Delete User Group
 * @apiVersion 0.1.0
 * @apiName DeleteUserGroup
 * @apiGroup Role
 * @apiParam {ObjectID} id User Group ID.
 * @apiParamExample {json} Request-Example:
 *     {
 *       "id": "5dafadc4a3a60236c437ad34"
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



/**
 * @api {put} /role/edit Edit User Group
 * @apiVersion 0.1.0
 * @apiName EditUserGroup
 * @apiGroup Role
 * @apiParam {ObjectID} id User Group ID.
 * @apiParam {String} group_name Group Name.
 * @apiParamExample {json} Request-Example:
 *     {
 *       "id": "5dafadc4a3a60236c437ad34",
 *       "group_name": "Asset Admin God"
 *     } 
 * @apiSuccessExample Success-Response-Data:
 *  [
 *     HTTP/1.1 200 OK
 *  ]
 * @apiError IdIsNull The <code>id</code> of User Group is null.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "status": "false",
 *       "error": "ID is null"
 *     }
 */
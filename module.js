/**
 * @api {get} /module/list_all Get List All Module
 * @apiVersion 0.1.0
 * @apiName GetListAllModule
 * @apiGroup Module
 * @apiSuccess {Object} list List of All Module.
 * @apiSuccessExample Success-Response:
 *  [
 *      {
 *          _id: "5d9c0264a3addc58419c9409",
 *          create_uid: null,
 *          create_date: "2019-10-06T07:35:36.812Z",
 *          write_uid: null,
 *          write_date: null,
 *          company_id: "ROOT",
 *          status: true,
 *          delete_id: null,
 *          description: "",
 *          keyword: "",
 *          name: "Quy hoạch",
 *          code: "PLANNING",
 *          sequence: 0,
 *          icon: "radius-upright",
 *          parent_id: null,
 *          __v: 0,
 *          children: [
 *              {
 *                  _id: "5d9c0409a3addc58419ece93",
 *                  create_uid: null,
 *                  create_date: "2019-10-06T07:35:36.812Z",
 *                  write_uid: null,
 *                  write_date: null,
 *                  company_id: "ROOT",
 *                  status: true,
 *                  delete_id: null,
 *                  description: "",
 *                  keyword: "",
 *                  url: "/planning/category",
 *                  name: "Danh mục quy hoạch",
 *                  code: "PLANNING_CATEGORY",
 *                  sequence: 0,
 *                  icon: "",
 *                  category_id: "5d9c0264a3addc58419c9409",
 *                  parent_id: null,
 *                  __v: 0,
 *                  type: "MENU"
 *             },
 *             {...},
 *             {...}
 *          ]
 *      }
 *      {...},
 *      {...},
 *      {...}
 *  ]
 *  
 */
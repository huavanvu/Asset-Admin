 /**
 * @api {get} /comment/list Get List Comment
 * @apiVersion 0.1.0
 * @apiName GetListComment
 * @apiGroup Comment
 * @apiParam {Int32} page Number of page.
 * @apiParam {Int32} limit Number of items in one page .
 * @apiParamExample Example:
 *     {
 *       "page": 1,
 *       "limit": 1
 *     }
 * @apiSuccess {Object} list List of Comment.
 * @apiSuccessExample Success-Response:
 *  {
 *      _id: "5d9fddf606816b2e80f298e9",
 *      create_date: "2019-10-11T01:42:14.168Z",
 *      reaction: [ ],
 *      parent_id: null,
 *      children: [ ],
 *      rel_id: "5d9d304fa3addc58413349bf",
 *      title: "asdasd" 
 *  }
 */


  /**
 * @api {post} /comment/add Add New Comment
 * @apiVersion 0.1.0
 * @apiName AddNewComment
 * @apiGroup Comment
 * @apiParam {Boolean} status Comment Status.
 * @apiParam {ObjectId} delete_id Comment Delete ID.
 * @apiParam {String} title Comment Title.
 * @apiParam {ObjectId} parent_id Comment Parent ID.
 * @apiParam {Object} children Comment Children.
 * @apiParam {String} path Comment Path.
 * @apiParam {ObjectID} rel_id Comment Rely Id.
 * @apiParam {String} rel_id_string Comment Rely ID String.
 * @apiSuccess {Object} reaction Comment Reaction.
 * @apiParamExample {json} Request-Example:
 *     {
 *          "_id" : ObjectId("5d9fe198ec7cab08bcbbab45"),
 *          "create_uid" : ObjectId("5d9c378d3c34df0f449f5ac3"),
 *          "create_date" : ISODate("2019-10-11T01:57:44.524Z"),
 *          "write_uid" : ObjectId("5d679819325ab70ab0157ce5"),
 *          "write_date" : ISODate("2019-10-10T06:54:20.514Z"),
 *          "company_id" : "ROOT",
 *          "status" : true,
 *          "delete_id" : null,
 *          "reaction" : [],
 *          "parent_id" : ObjectId("5d9fe0e8ec7cab08bcbbab3d"),
 *          "children" : [],
 *          "rel_id" : ObjectId("5d789b9da31d1828c0c10dd0"),
 *          "title" : "dsd",
 *          "__v" : 0
 *     }
 * @apiSuccessExample Success-Response-Data:
 *  [
 *     HTTP/1.1 200 OK
 *  ]
 */



  /**
 * @api {get} /comment/count_by_id Count Number Of Comment By ID
 * @apiVersion 0.1.0
 * @apiName CountNumberOfComment
 * @apiGroup Comment
 * @apiSuccess {Int32} number Number of Comment.
 * @apiSuccessExample Success-Response-Data:
 *  {
 *      status: true,
 *      data: 20
 *  }
 */
/**
 * @api {get} /address/city Get List City
 * @apiVersion 0.1.0
 * @apiName GetListCity
 * @apiGroup Address
 * @apiSuccess {Object} list List of City.
 * @apiSuccessExample Success-Response:
 *  [
 *     {
 *          create_uid: "5d679819325ab70ab0157ce5",
 *          create_date: "2019-08-09T10:35:27.980Z",
 *          write_uid: "5d679819325ab70ab0157ce5",
 *          write_date: "2019-08-31T02:46:49.864Z",
 *          company_id: "ROOT",
 *          status: false,
 *          delete_id: null,
 *          _id: "5d99546d3fc4f3ba462b0761",
 *          address_name: "Bắc Ninh",
 *          type: "C",
 *          parent_id: "0",
 *          country_id: 243,
 *          points: {
 *              type: "Point",
 *              coordinates: [
 *                  106.109754403924,
 *                  21.1176402844952
 *              ]
 *          },
 *          code: "VN_22",
 *          reaction: [ ],
 *          old_id: "10",
 *          name: "Bắc Ninh"
 *     }
 *     {...},
 *     {...},
 *     {...}
 *  ]
 */


 /**
 * @api {get} /address/province Get List Province
 * @apiVersion 0.1.0
 * @apiName GetListProvince
 * @apiGroup Address
 * @apiParam {ObjectID} city_id City ID Of Province.
 * @apiParamExample {Int32} Example:
 *     {
 *       "city_id": "5d99546d3fc4f3ba462b0761"
 *     }
 * 
 * @apiSuccess {Object} list List of Planning Category.
 * @apiSuccessExample Success-Response:
 *  [
 *     {
 *          create_uid: "5d679819325ab70ab0157ce5",
 *          create_date: "2019-08-09T10:35:29.283Z",
 *          write_uid: "5d679819325ab70ab0157ce5",
 *          write_date: "2019-08-31T02:51:13.025Z",
 *          company_id: "ROOT",
 *          status: false,
 *          delete_id: null,
 *          _id: "5d99547e3fc4f3ba462b07a0",
 *          type: "D",
 *          parent_id: "10",
 *          country_id: 243,
 *          points: {
 *              type: "Point",
 *              coordinates: [
 *                  106.059728972504,
 *                  21.1740781241828
 *              ]
 *          },
 *          code: "VN_2201",
 *          reaction: [ ],
 *          old_id: "1392",
 *          city_id: "5d99546d3fc4f3ba462b0761",
 *          name: "Bắc Ninh"
 *     }
 *     {...},
 *     {...},
 *     {...}
 *  ]
 */


  /**
 * @api {get} /address/ward Get List Ward
 * @apiVersion 0.1.0
 * @apiName GetListWard
 * @apiGroup Address
 * @apiParam {ObjectID} province_id Province ID Of Ward.
 * @apiParamExample {Int32} Example:
 *     {
 *       "province_id": "5d99547e3fc4f3ba462b07a0"
 *     }
 * 
 * @apiSuccess {Object} list List of Planning Category.
 * @apiSuccessExample Success-Response:
 *  [
 *     {
 *          create_uid: "5d679819325ab70ab0157ce5",
 *          create_date: "2019-08-09T10:36:01.356Z",
 *          write_uid: "5d679819325ab70ab0157ce5",
 *          write_date: "2019-08-31T03:11:01.189Z",
 *          company_id: "ROOT",
 *          status: false,
 *          delete_id: null,
 *          _id: "5d9955093fc4f3ba462b0a66",
 *          type: "W",
 *          parent_id: "1392",
 *          country_id: 243,
 *          points: {
 *              type: "Point",
 *              coordinates: [
 *                  106.081470120058,
 *                  21.1702286299397
 *              ]
 *          },
 *          code: "VN_220101",
 *          reaction: [ ],
 *          old_id: "5083",
 *          province_id: "5d99547e3fc4f3ba462b07a0",
 *          name: "Đại Phúc"
 *     }
 *     {...},
 *     {...},
 *     {...}
 *  ]
 */
/**
 * @api {get} /product/list Get List Product
 * @apiVersion 0.1.0
 * @apiName GetListProduct
 * @apiGroup Product
 * @apiParam {Int32} page Number of page.
 * @apiParam {Int32} limit Number of items in one page .
 * @apiParamExample Example:
 *     {
 *       "page": 1,
 *       "limit": 1
 *     }
 * @apiSuccess {Object} list List of Resource.
 * @apiSuccessExample Success-Response:
 *  [
 *      {
 *          _id: "710801-P10.10",
 *          create_uid: "b01e6241-0488-40b1-bc53-525050cd6d58",
 *          create_date: "2019-08-31T04:49:51.125Z",
 *          write_uid: "b01e6241-0488-40b1-bc53-525050cd6d58",
 *          write_date: "2019-08-31T04:49:51.125Z",
 *          company_id: "ROOT",
 *          status: 0,
 *          delete_id: "",
 *          code: "710801-P10.10",
 *          name: "",
 *          parent_id: "",
 *          category_id: "5db116febca3ae2b5816d0ad",
 *          unit_id: "",
 *          type: "",
 *          address: "",
 *          length: 19.5,
 *          width: 10,
 *          height: 0,
 *          notify_days: 0,
 *          min_quantity: 0,
 *          max_quantity: 0,
 *          packaging: "",
 *          preservation: "",
 *          producer_id: "",
 *          type_id: "5d6e57310b4d9fd73db02be9",
 *          description: "",
 *          formula: "",
 *          manufacturer_code: "",
 *          manufacturer_id: "",
 *          url: "",
 *          list_id: "",
 *          barcode: "",
 *          photo: "",
 *          sequence: 0,
 *          display_description: 0,
 *          display_dimensions: 0,
 *          version: "",
 *          regulatory_code: "",
 *          quantity: 0,
 *          expiration_number: 0,
 *          expiration_type: "",
 *          points: {
 *              type: "Point",
 *              coordinates: [
 *                  106.736522,
 *                  10.633548
 *              ]
 *          },
 *          polygons: {
 *              type: "Polygon",
 *              coordinates: [
 *                  [
 *                      [
 *                          106.7365879112053,
 *                          10.63348680104764
 *                      ],
 *                      [
 *                          106.7365649789735,
 *                          10.6336308844651
 *                      ],
 *                      [
 *                          106.7364551606902,
 *                          10.63361152193145
 *                      ],
 *                      [
 *                          106.7364834763424,
 *                          10.63346479991951
 *                      ],
 *                      [
 *                          106.7365879112053,
 *                          10.63348680104764
 *                      ]
 *                  ]
 *              ]
 *          },
 *          keywords: "",
 *          project_id: "",
 *          currency_id: "",
 *          unit_price: 0,
 *          currency_unit_id: "",
 *          bedroom: 2,
 *          area: 194.9600067138672,
 *          area_of_use: 0,
 *          bathroom: 4,
 *          number_of_floor: 3,
 *          facade: 0,
 *          east: 0,
 *          west: 0,
 *          south: 0,
 *          north: 0,
 *          east_north: 0,
 *          west_north: 0,
 *          east_south: 0,
 *          west_south: 0,
 *          tags: "",
 *          block: "",
 *          area_unit_id: " m2 ",
 *          length_unit_id: " m ",
 *          width_unit_id: " m ",
 *          height_unit_id: "",
 *          bathroom_unit_id: " WC ",
 *          bedroom_unit_id: " PN ",
 *          toilet: 0,
 *          toilet_unit_id: "",
 *          direction: "Tây Nam",
 *          location: "710801-P10.10 - , Xã Hiệp Phước, Nhà Bè, TPHCM",
 *          access_road: " Đường tiếp cận 24m (LG 8m) ",
 *          investor_id: "Nhà tự xây",
 *          handover_time: "Sep-05",
 *          vat_unit_price: 0,
 *          vat_unit_id: "",
 *          a_value: 25.729999542236328,
 *          a_value_unit_id: " tỷ ",
 *          a_rent: 42.88999938964844,
 *          a_rent_unit_id: " triệu / tháng ",
 *          planning_area: 0,
 *          planning_area_unit_id: " m2 ",
 *          lost_area: 0,
 *          lost_area_unit_id: " m2 ",
 *          floor_area: 585,
 *          floor_area_unit_id: " m2 ",
 *          legal: "Sổ hồng",
 *          feature: " Hẻm xe hơi ",
 *          sale_price: 0,
 *          sale_price_unit_id: "",
 *          floor_unit_id: " tầng ",
 *          number_of_sheet: 10,
 *          nubmer_of_parcel: 10,
 *          ward: "Xã Hiệp Phước",
 *          handover_status: "",
 *          cons_status: "Đã bàn giao",
 *          planning_category_id: " ODT ",
 *          transaction: "Không giao dịch",
 *          trans_time: "",
 *          deposit: 0,
 *          deposit_unit_id: "",
 *          monthly_payment: 0,
 *          payment_unit_id: "",
 *          sale_price_rate: 1,
 *          sale_price_value: 0,
 *          reaction: [ ],
 *          asset_rating: 4.5,
 *          rating: [
 *              "5d7a0e3940a5f81a4067147a",
 *              "5d7af2afa8248722f84c30ff"
 *          ],
 *          rating_avg: 3.5,
 *          floor: 1,
 *          status_detail: {
 *              _id: "5d6e57310b4d9fd73db02be9",
 *              create_uid: "b01e6241-0488-40b1-bc53-525050cd6d58",
 *              create_date: "2019-07-27T08:48:56.620Z",
 *              write_uid: "b01e6241-0488-40b1-bc53-525050cd6d58",
 *              write_date: "2019-07-27T08:48:56.620Z",
 *              company_id: "ROOT",
 *              status: true,
 *              delete_id: "",
 *              type_name: "Không giao dịch",
 *              type: "",
 *              parent_id: "",
 *              type_code: "4",
 *              description: "",
 *              marker_url: "marker_bds_khongiaodich.png",
 *              marker_hover_url: "marker_bds_ban_hover.svg",
 *              color_code: "gray"
 *          }
 *      }
 * ]
 */




/**
 * @api {get} /product/count Count Number Of Product
 * @apiVersion 0.1.0
 * @apiName CountNumberOfProduct 
 * @apiGroup Product
 * @apiSuccess {Int32} number Number of Product.
 * @apiSuccessExample Success-Response-Data:
 *  {
 *    129146
 *  }
 */


 /**
 * @api {get} /product/detail Get Product Detail 
 * @apiVersion 0.1.0
 * @apiName GetProductDetail
 * @apiGroup Product
 * @apiParam {ObjectID} id ID of product item
 * @apiParamExample Example:
 *     {
 *       "id": 5db95715f4072a3eb02c3f48
 *     }
 * 
 * @apiSuccess {Object} Resource Detail.
 * @apiSuccessExample Success-Response:
 *  {
 *      "_id" : ObjectId("5db95715f4072a3eb02c3f48"),
 *      "create_uid" : ObjectId("5d679819325ab70ab0157ce5"),
 *      "create_date" : ISODate("2019-10-30T09:25:39.720Z"),
 *      "write_uid" : ObjectId("5d679819325ab70ab0157ce5"),
 *      "write_date" : ISODate("2019-10-30T09:25:39.720Z"),
 *      "company_id" : "ROOT",
 *      "status" : true,
 *      "delete_id" : null,
 *      "rating" : [ 
 *          ObjectId("5dbab8a1ebd384b5e4ecc346")
 *      ],
 *      "sub_image" : [],
 *      "reaction" : [ 
 *          ObjectId("5dbab8e1ebd384b5e4ecc347")
 *      ],
 *      "code" : "790210R59.66",
 *      "points" : {
 *          "type" : "Point",
 *          "coordinates" : [ 
 *              106.598439719, 
 *              10.7236330403
 *          ]
 *      },
 *      "polygons" : {
 *          "type" : "Polygon",
 *          "coordinates" : [ 
 *              [ 
 *                  106.59852296896, 
 *                  10.7237122996829
 *              ], 
 *              [ 
 *                  106.598482274637, 
 *                  10.7237402551087
 *              ], 
 *              [ 
 *                  106.5984085698, 
 *                  10.7236337780764
 *              ], 
 *              [ 
 *                  106.598382139624, 
 *                  10.7235972359238
 *              ], 
 *              [ 
 *                  106.59838168097, 
 *                  10.7235966037003
 *              ], 
 *              [ 
 *                  106.598361949844, 
 *                  10.7235692652095
 *              ], 
 *              [ 
 *                  106.598355250794, 
 *                  10.7235599716154
 *              ], 
 *              [ 
 *                  106.59840059731, 
 *                  10.7235285672896
 *              ], 
 *              [ 
 *                  106.598428223584, 
 *                  10.7235678190996
 *              ], 
 *              [ 
 *                  106.598428407045, 
 *                  10.723567998964
 *              ], 
 *              [ 
 *                  106.598447313493, 
 *                  10.7235948886932
 *              ], 
 *              [ 
 *                  106.59852296896, 
 *                  10.7237122996829
 *              ]
 *          ]
 *      },
 *      "ward_id" : ObjectId("5db94816b27d853b50b6642a"),
 *      "category_id" : ObjectId("5db2c448f835f22804d62d3c"),
 *      "name" : "Nhà riêng Phường Tân Tạo A",
 *      "land_area" : 140.933,
 *      "land_area_unit_id" : "m2",
 *      "lost_area" : 0.0059967,
 *      "lost_area_unit_id" : "m2",
 *      "location" : "790210R59.66 - Nhà riêng Phường Tân Tạo A",
 *      "number_of_sheet" : 59,
 *      "number_of_parcel" : 66,
 *      "investor_id" : "IV.0000",
 *      "cons_status" : "Đã bàn giao",
 *      "planning_category_id" : "OTC",
 *      "type_id" : ObjectId("5d6e57310b4d9fd73db02be9"),
 *      "__v" : 0,
 *      "rating_avg" : 4.5,
 *      "commnent" : []
 *  }
 */



 /**
 * @api {post} /product/add Add New Product
 * @apiVersion 0.1.0
 * @apiName AddNewProduct
 * @apiGroup Product
 * @apiParam {Boolean} status Product Status.
 * @apiParam {ObjectId} delete_id Product Delete ID.
 * @apiParam {Array} rating Product Rating.
 * @apiParam {String} code Product Code.
 * @apiParam {String} block Product Block.
 * @apiParam {ObjectId} project_id Product Project ID.
 * @apiSuccess {Object} points Product Point.
 * @apiSuccess {Object} polygons Product Polygons.
 * @apiParam {ObjectId} ward_id Product Ward ID.
 * @apiParam {String} address Product Address.
 * @apiParam {ObjectId} category_id Product Category ID.
 * @apiParam {String} name Product Name.
 * @apiParam {Number} sale_price Product Sale Price.
 * @apiParam {String} sale_price_unit_id Sale Price Unit ID.
 * @apiParam {Number} sale_price_rate Product Sale Price Rate.
 * @apiParam {Number} unit_price Product Unit Price.
 * @apiParam {String} currency_unit_id Product Currency Unit ID.
 * @apiParam {Number} land_area Product Land Area.
 * @apiParam {Number} land_area_unit_id Product Land Area Unit ID.
 * @apiParam {Number} floor_area Product Floor Area.
 * @apiParam {String} floor_area_unit_id Product Floor Area Unit ID.
 * @apiParam {Number} planing_area Product Planing Area.
 * @apiParam {String} planing_area_unit_id Product Planing Area Unit ID.
 * @apiParam {Number} lost_area Product Lost Area.
 * @apiParam {String} lost_area_unit_id Product Lost Area Unit ID.
 * @apiParam {Number} width Product Width.
 * @apiParam {Number} length Product Length.
 * @apiParam {String} length_unit_id Product Length Unit ID.
 * @apiParam {String} location Product Location.
 * @apiParam {Number} number_of_sheet Product Number Of Sheet.
 * @apiParam {Number} number_of_parcel Product Number Of Parcel.
 * @apiParam {String} investor_id Product Investor ID.
 * @apiParam {Date} handover_time Product Handover Time.
 * @apiParam {String} cons_status Product Construction Status.
 * @apiParam {String} legal Product Legal.
 * @apiParam {ObjectId} planning_category_id Product Planning Category ID.
 * @apiParam {ObjectId} type_id Product Type ID.
 * @apiParam {Date} trans_time Product Transaction Time.
 * @apiParam {Number} deposit Product Deposit.
 * @apiParam {String} deposit_unit_id Product Deposit Unit ID.
 * @apiParam {Number} monthly_payment Product Monthly Payment.
 * @apiParam {String} payment_unit_id Product Payment Unit ID.
 * @apiParam {Number} a_value Product Assess Value.
 * @apiParam {String} a_value_unit_id Product Assess Value Unit ID.
 * @apiParam {Number} a_rent Product Assess Rent.
 * @apiParam {String} a_rent_unit_id Product Assess Rent Unit ID.
 * @apiParam {String} feature Product Feature.
 * @apiParam {String} access_road Product Access Road.
 * @apiParam {String} description Product Description.
 * @apiParam {Number} number_of_floor Product Number Of Floor.
 * @apiParam {String} floor_unit_id Product Floor Unit ID.
 * @apiParam {Number} bedroom Product Bedroom.
 * @apiParam {String} bedroom_unit_id Product Bedroom Unit ID.
 * @apiParam {Number} bathroom Product Bathroom.
 * @apiParam {String} bathroom_unit_id Product Bathroom Unit ID.
 * @apiParam {String} direction Product Direction.
 * @apiParam {ObjectId} rating Product Rating.
 * @apiParam {Number} rating_avg Product Rating Average.
 * @apiParam {String} image Product Image.
 * @apiParam {String} sub_image Product Sub Image.
 * @apiParam {Number} asset_rating Product Asset Rating.
 * @apiParam {ObjectId} legal_id Product Legal ID.
 * @apiParam {ObjectId} cons_design_info_id Product Construction Design Information ID.
 * @apiParam {Array} reaction Product Reaction.
 * @apiParam {String} video Product Video.
 * @apiParam {String} view_3d Product View 3D.
 * @apiParamExample {json} Request-Example:
 *     {
 *          "create_uid" : ObjectId("5d679819325ab70ab0157ce5"),
 *          "create_date" : ISODate("2019-10-30T09:25:39.720Z"),
 *          "write_uid" : ObjectId("5d679819325ab70ab0157ce5"),
 *          "write_date" : ISODate("2019-10-30T09:25:39.720Z"),
 *          "company_id" : "ROOT",
 *          "status" : true,
 *          "delete_id" : null,
 *          "rating" : [ 
 *              ObjectId("5dbab8a1ebd384b5e4ecc346")
 *          ],
 *          "sub_image" : [],
 *          "reaction" : [ 
 *              ObjectId("5dbab8e1ebd384b5e4ecc347")
 *          ],
 *          "code" : "790210R59.66",
 *          "points" : {
 *              "type" : "Point",
 *              "coordinates" : [ 
 *                  106.598439719, 
 *                  10.7236330403
 *              ]
 *          },
 *          "polygons" : {
 *              "type" : "Polygon",
 *              "coordinates" : [ 
 *                  [ 
 *                      106.59852296896, 
 *                      10.7237122996829
 *                  ], 
 *                  [ 
 *                      106.598482274637, 
 *                      10.7237402551087
 *                  ], 
 *                  [ 
 *                      106.5984085698, 
 *                      10.7236337780764
 *                  ], 
 *                  [ 
 *                      106.598382139624, 
 *                      10.7235972359238
 *                  ], 
 *                  [ 
 *                      106.59838168097, 
 *                      10.7235966037003
 *                  ], 
 *                  [ 
 *                      106.598361949844, 
 *                      10.7235692652095
 *                  ], 
 *                  [ 
 *                      106.598355250794, 
 *                      10.7235599716154
 *                  ], 
 *                  [ 
 *                      106.59840059731, 
 *                      10.7235285672896
 *                  ], 
 *                  [ 
 *                      106.598428223584, 
 *                      10.7235678190996
 *                  ], 
 *                  [ 
 *                      106.598428407045, 
 *                      10.723567998964
 *                  ], 
 *                  [ 
 *                      106.598447313493, 
 *                      10.7235948886932
 *                  ], 
 *                  [ 
 *                      106.59852296896, 
 *                      10.7237122996829
 *                  ]
 *              ]
 *          },
 *          "ward_id" : ObjectId("5db94816b27d853b50b6642a"),
 *          "category_id" : ObjectId("5db2c448f835f22804d62d3c"),
 *          "name" : "Nhà riêng Phường Tân Tạo A",
 *          "land_area" : 140.933,
 *          "land_area_unit_id" : "m2",
 *          "lost_area" : 0.0059967,
 *          "lost_area_unit_id" : "m2",
 *          "location" : "790210R59.66 - Nhà riêng Phường Tân Tạo A",
 *          "number_of_sheet" : 59,
 *          "number_of_parcel" : 66,
 *          "investor_id" : "IV.0000",
 *          "cons_status" : "Đã bàn giao",
 *          "planning_category_id" : "OTC",
 *          "type_id" : ObjectId("5d6e57310b4d9fd73db02be9"),
 *          "__v" : 0,
 *          "rating_avg" : 4.5,
 *          "commnent" : []
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
 * @api {put} /product/edit Edit Product
 * @apiVersion 0.1.0
 * @apiName EditProduct
 * @apiGroup Product
 * @apiParam {ObjectID} id Product ID.
 * @apiParam {String} name Guide Name.
 * @apiParamExample {json} Request-Example:
 *     {
 *          "id": "5db95715f4072a3eb02c3f48",
 *          "create_uid" : ObjectId("5d679819325ab70ab0157ce5"),
 *          "create_date" : ISODate("2019-10-30T09:25:39.720Z"),
 *          "write_uid" : ObjectId("5d679819325ab70ab0157ce5"),
 *          "write_date" : ISODate("2019-10-30T09:25:39.720Z"),
 *          "company_id" : "ROOT",
 *          "status" : true,
 *          "delete_id" : null,
 *          "rating" : [ 
 *              ObjectId("5dbab8a1ebd384b5e4ecc346")
 *          ],
 *          "sub_image" : [],
 *          "reaction" : [ 
 *              ObjectId("5dbab8e1ebd384b5e4ecc347")
 *          ],
 *          "code" : "790210R59.66",
 *          "points" : {
 *              "type" : "Point",
 *              "coordinates" : [ 
 *                  106.598439719, 
 *                  10.7236330403
 *              ]
 *          },
 *          "polygons" : {
 *              "type" : "Polygon",
 *              "coordinates" : [ 
 *                  [ 
 *                      106.59852296896, 
 *                      10.7237122996829
 *                  ], 
 *                  [ 
 *                      106.598482274637, 
 *                      10.7237402551087
 *                  ], 
 *                  [ 
 *                      106.5984085698, 
 *                      10.7236337780764
 *                  ], 
 *                  [ 
 *                      106.598382139624, 
 *                      10.7235972359238
 *                  ], 
 *                  [ 
 *                      106.59838168097, 
 *                      10.7235966037003
 *                  ], 
 *                  [ 
 *                      106.598361949844, 
 *                      10.7235692652095
 *                  ], 
 *                  [ 
 *                      106.598355250794, 
 *                      10.7235599716154
 *                  ], 
 *                  [ 
 *                      106.59840059731, 
 *                      10.7235285672896
 *                  ], 
 *                  [ 
 *                      106.598428223584, 
 *                      10.7235678190996
 *                  ], 
 *                  [ 
 *                      106.598428407045, 
 *                      10.723567998964
 *                  ], 
 *                  [ 
 *                      106.598447313493, 
 *                      10.7235948886932
 *                  ], 
 *                  [ 
 *                      106.59852296896, 
 *                      10.7237122996829
 *                  ]
 *              ]
 *          },
 *          "ward_id" : ObjectId("5db94816b27d853b50b6642a"),
 *          "category_id" : ObjectId("5db2c448f835f22804d62d3c"),
 *          "name" : "Nhà riêng Phường Tân Tạo tại TPHCM",
 *          "land_area" : 140.933,
 *          "land_area_unit_id" : "m2",
 *          "lost_area" : 0.0059967,
 *          "lost_area_unit_id" : "m2",
 *          "location" : "790210R59.66 - Nhà riêng Phường Tân Tạo A",
 *          "number_of_sheet" : 59,
 *          "number_of_parcel" : 66,
 *          "investor_id" : "IV.0000",
 *          "cons_status" : "Đã bàn giao",
 *          "planning_category_id" : "OTC",
 *          "type_id" : ObjectId("5d6e57310b4d9fd73db02be9"),
 *          "__v" : 0,
 *          "rating_avg" : 4.5,
 *          "commnent" : []
 *     } 
 * @apiSuccessExample Success-Response-Data:
 *      HTTP/1.1 200 OK
 *      {
 *          "status": "true"
 *      }
 * @apiError IdIsNull The <code>id</code> of Resource is null.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "status": "false",
 *       "error": "ID is null"
 *     }
 * @apiError PointWasNotCorrect The <code>Point</code> of Product was not correct.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "status": "false",
 *       "error": "sai tọa độ point"
 *     }
 * @apiError PolygonWasNotCorrect The <code>Polygon</code> of Product was not correct.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "status": "false",
 *       "error": "sai tọa độ polygon"
 *     }
 */
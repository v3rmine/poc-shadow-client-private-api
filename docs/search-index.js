var searchIndex={};
searchIndex["shadowtech_api"] = {"doc":"Library to used to access the Shadow private API with Rust","i":[[0,"client","shadowtech_api","",null,null],[3,"InnerResponse","shadowtech_api::client","",null,null],[12,"headers","","",0,null],[12,"status_code","","",0,null],[12,"status","","",0,null],[12,"raw_response","","",0,null],[3,"Shadow","","",null,null],[12,"email","","",1,null],[12,"password","","",1,null],[12,"session_uuid","","",1,null],[12,"shadow_uuid","","",1,null],[12,"inner","","",1,null],[3,"ShadowDynamic","","",null,null],[12,"general","","",2,null],[12,"status","","",2,null],[12,"log","","",2,null],[12,"computer","","",2,null],[12,"auth","","",2,null],[12,"customer","","",2,null],[12,"dispatcher","","",2,null],[4,"Status","","",null,null],[13,"Info","","",3,null],[13,"Success","","",3,null],[13,"Redirect","","",3,null],[13,"ClientError","","",3,null],[13,"ServerError","","",3,null],[13,"Unknown","","",3,null],[6,"Response","","",null,null],[8,"ToResp","","",null,null],[10,"to_response","","",4,[[],["response"]]],[0,"errors","shadowtech_api","",null,null],[3,"Error","shadowtech_api::errors","The Error type.",null,null],[12,"0","","The kind of the error.",5,null],[4,"ErrorKind","","The kind of an error.",null,null],[13,"Msg","","A convenient variant for String.",6,null],[13,"Ureq","","",6,null],[13,"Base64Decode","","",6,null],[13,"Io","","",6,null],[13,"SerdeJson","","",6,null],[13,"Url","","",6,null],[6,"Result","","Convenient wrapper around `std::Result`.",null,null],[8,"ResultExt","","Additional methods for `Result`, for easy interaction with…",null,null],[10,"chain_err","","If the `Result` is an `Err` then `chain_err` evaluates the…",7,[[["f"]],[["error"],["result",["error"]]]]],[11,"from_kind","","Constructs an error from a kind, and generates a backtrace.",5,[[["errorkind"]],["error"]]],[11,"with_chain","","Constructs a chained error from another error and a kind,…",5,[[["k"],["e"]],["error"]]],[11,"with_boxed_chain","","Construct a chained error from another boxed error and a…",5,[[["box",["error"]],["error"],["k"]],["error"]]],[11,"kind","","Returns the kind of the error.",5,[[["self"]],["errorkind"]]],[11,"iter","","Iterates over the error chain.",5,[[["self"]],["iter"]]],[11,"backtrace","","Returns the backtrace associated with this error.",5,[[["self"]],[["backtrace"],["option",["backtrace"]]]]],[11,"chain_err","","Extends the error chain with a new entry.",5,[[["f"]],["error"]]],[11,"description","","A short description of the error. This method is identical…",5,[[["self"]],["str"]]],[11,"description","","A string describing the error kind.",6,[[["self"]],["str"]]],[0,"constants","shadowtech_api","",null,null],[17,"DEFAULT_GENERAL_ENDPOINT","shadowtech_api::constants","",null,null],[17,"DEFAULT_STATUS_ENDPOINT","","",null,null],[17,"DEFAULT_AUTH_ENDPOINT","","",null,null],[17,"DEFAULT_CUSTOMER_ENDPOINT","","",null,null],[17,"DEFAULT_DISPATCHER_ENDPOINT","","",null,null],[17,"DEFAULT_USER_AGENT","","",null,null],[17,"DEFAULT_SHADOW_AGENT","","",null,null],[17,"DEFAULT_ACCEPT_ENCODING","","",null,null],[17,"DEFAULT_ACCEPT_LANGUAGE","","",null,null],[0,"general","shadowtech_api","",null,null],[3,"GeneralEnv","shadowtech_api::general","",null,null],[11,"default","","",8,[[],["result"]]],[0,"status","shadowtech_api","",null,null],[3,"StatusEnv","shadowtech_api::status","",null,null],[11,"default","","",9,[[],["result"]]],[0,"auth","shadowtech_api","",null,null],[3,"AuthEnv","shadowtech_api::auth","",null,null],[11,"default","","",10,[[],["result"]]],[0,"computer","shadowtech_api","",null,null],[3,"ComputerEnv","shadowtech_api::computer","",null,null],[11,"default","","",11,[[],["self"]]],[0,"customer","shadowtech_api","",null,null],[3,"CustomerEnv","shadowtech_api::customer","",null,null],[11,"default","","",12,[[],["result"]]],[0,"dispatcher","shadowtech_api","",null,null],[3,"DispatcherEnv","shadowtech_api::dispatcher","",null,null],[11,"default","","",13,[[],["result"]]],[0,"log","shadowtech_api","",null,null],[3,"LogEnv","shadowtech_api::log","",null,null],[3,"LogQuery","","",null,null],[3,"LogQueryMetadata","","",null,null],[3,"LogQueryValues","","",null,null],[8,"ShadowLog","","",null,null],[10,"log","","",14,[[["logquery"],["self"]],["response"]]],[11,"default","","",15,[[],["self"]]],[11,"from","shadowtech_api::client","",0,[[["t"]],["t"]]],[11,"into","","",0,[[],["u"]]],[11,"to_owned","","",0,[[["self"]],["t"]]],[11,"clone_into","","",0,[[["self"],["t"]]]],[11,"try_from","","",0,[[["u"]],["result"]]],[11,"try_into","","",0,[[],["result"]]],[11,"borrow","","",0,[[["self"]],["t"]]],[11,"borrow_mut","","",0,[[["self"]],["t"]]],[11,"type_id","","",0,[[["self"]],["typeid"]]],[11,"from","","",1,[[["t"]],["t"]]],[11,"into","","",1,[[],["u"]]],[11,"to_owned","","",1,[[["self"]],["t"]]],[11,"clone_into","","",1,[[["self"],["t"]]]],[11,"try_from","","",1,[[["u"]],["result"]]],[11,"try_into","","",1,[[],["result"]]],[11,"borrow","","",1,[[["self"]],["t"]]],[11,"borrow_mut","","",1,[[["self"]],["t"]]],[11,"type_id","","",1,[[["self"]],["typeid"]]],[11,"from","","",2,[[["t"]],["t"]]],[11,"into","","",2,[[],["u"]]],[11,"to_owned","","",2,[[["self"]],["t"]]],[11,"clone_into","","",2,[[["self"],["t"]]]],[11,"try_from","","",2,[[["u"]],["result"]]],[11,"try_into","","",2,[[],["result"]]],[11,"borrow","","",2,[[["self"]],["t"]]],[11,"borrow_mut","","",2,[[["self"]],["t"]]],[11,"type_id","","",2,[[["self"]],["typeid"]]],[11,"from","","",3,[[["t"]],["t"]]],[11,"into","","",3,[[],["u"]]],[11,"to_owned","","",3,[[["self"]],["t"]]],[11,"clone_into","","",3,[[["self"],["t"]]]],[11,"try_from","","",3,[[["u"]],["result"]]],[11,"try_into","","",3,[[],["result"]]],[11,"borrow","","",3,[[["self"]],["t"]]],[11,"borrow_mut","","",3,[[["self"]],["t"]]],[11,"type_id","","",3,[[["self"]],["typeid"]]],[11,"from","shadowtech_api::errors","",5,[[["t"]],["t"]]],[11,"into","","",5,[[],["u"]]],[11,"to_string","","",5,[[["self"]],["string"]]],[11,"try_from","","",5,[[["u"]],["result"]]],[11,"try_into","","",5,[[],["result"]]],[11,"borrow","","",5,[[["self"]],["t"]]],[11,"borrow_mut","","",5,[[["self"]],["t"]]],[11,"type_id","","",5,[[["self"]],["typeid"]]],[11,"from","","",6,[[["t"]],["t"]]],[11,"into","","",6,[[],["u"]]],[11,"to_string","","",6,[[["self"]],["string"]]],[11,"try_from","","",6,[[["u"]],["result"]]],[11,"try_into","","",6,[[],["result"]]],[11,"borrow","","",6,[[["self"]],["t"]]],[11,"borrow_mut","","",6,[[["self"]],["t"]]],[11,"type_id","","",6,[[["self"]],["typeid"]]],[11,"from","shadowtech_api::general","",8,[[["t"]],["t"]]],[11,"into","","",8,[[],["u"]]],[11,"to_owned","","",8,[[["self"]],["t"]]],[11,"clone_into","","",8,[[["self"],["t"]]]],[11,"try_from","","",8,[[["u"]],["result"]]],[11,"try_into","","",8,[[],["result"]]],[11,"borrow","","",8,[[["self"]],["t"]]],[11,"borrow_mut","","",8,[[["self"]],["t"]]],[11,"type_id","","",8,[[["self"]],["typeid"]]],[11,"from","shadowtech_api::status","",9,[[["t"]],["t"]]],[11,"into","","",9,[[],["u"]]],[11,"to_owned","","",9,[[["self"]],["t"]]],[11,"clone_into","","",9,[[["self"],["t"]]]],[11,"try_from","","",9,[[["u"]],["result"]]],[11,"try_into","","",9,[[],["result"]]],[11,"borrow","","",9,[[["self"]],["t"]]],[11,"borrow_mut","","",9,[[["self"]],["t"]]],[11,"type_id","","",9,[[["self"]],["typeid"]]],[11,"from","shadowtech_api::auth","",10,[[["t"]],["t"]]],[11,"into","","",10,[[],["u"]]],[11,"to_owned","","",10,[[["self"]],["t"]]],[11,"clone_into","","",10,[[["self"],["t"]]]],[11,"try_from","","",10,[[["u"]],["result"]]],[11,"try_into","","",10,[[],["result"]]],[11,"borrow","","",10,[[["self"]],["t"]]],[11,"borrow_mut","","",10,[[["self"]],["t"]]],[11,"type_id","","",10,[[["self"]],["typeid"]]],[11,"from","shadowtech_api::computer","",11,[[["t"]],["t"]]],[11,"into","","",11,[[],["u"]]],[11,"to_owned","","",11,[[["self"]],["t"]]],[11,"clone_into","","",11,[[["self"],["t"]]]],[11,"try_from","","",11,[[["u"]],["result"]]],[11,"try_into","","",11,[[],["result"]]],[11,"borrow","","",11,[[["self"]],["t"]]],[11,"borrow_mut","","",11,[[["self"]],["t"]]],[11,"type_id","","",11,[[["self"]],["typeid"]]],[11,"from","shadowtech_api::customer","",12,[[["t"]],["t"]]],[11,"into","","",12,[[],["u"]]],[11,"to_owned","","",12,[[["self"]],["t"]]],[11,"clone_into","","",12,[[["self"],["t"]]]],[11,"try_from","","",12,[[["u"]],["result"]]],[11,"try_into","","",12,[[],["result"]]],[11,"borrow","","",12,[[["self"]],["t"]]],[11,"borrow_mut","","",12,[[["self"]],["t"]]],[11,"type_id","","",12,[[["self"]],["typeid"]]],[11,"from","shadowtech_api::dispatcher","",13,[[["t"]],["t"]]],[11,"into","","",13,[[],["u"]]],[11,"to_owned","","",13,[[["self"]],["t"]]],[11,"clone_into","","",13,[[["self"],["t"]]]],[11,"try_from","","",13,[[["u"]],["result"]]],[11,"try_into","","",13,[[],["result"]]],[11,"borrow","","",13,[[["self"]],["t"]]],[11,"borrow_mut","","",13,[[["self"]],["t"]]],[11,"type_id","","",13,[[["self"]],["typeid"]]],[11,"from","shadowtech_api::log","",15,[[["t"]],["t"]]],[11,"into","","",15,[[],["u"]]],[11,"to_owned","","",15,[[["self"]],["t"]]],[11,"clone_into","","",15,[[["self"],["t"]]]],[11,"try_from","","",15,[[["u"]],["result"]]],[11,"try_into","","",15,[[],["result"]]],[11,"borrow","","",15,[[["self"]],["t"]]],[11,"borrow_mut","","",15,[[["self"]],["t"]]],[11,"type_id","","",15,[[["self"]],["typeid"]]],[11,"from","","",16,[[["t"]],["t"]]],[11,"into","","",16,[[],["u"]]],[11,"to_owned","","",16,[[["self"]],["t"]]],[11,"clone_into","","",16,[[["self"],["t"]]]],[11,"try_from","","",16,[[["u"]],["result"]]],[11,"try_into","","",16,[[],["result"]]],[11,"borrow","","",16,[[["self"]],["t"]]],[11,"borrow_mut","","",16,[[["self"]],["t"]]],[11,"type_id","","",16,[[["self"]],["typeid"]]],[11,"from","","",17,[[["t"]],["t"]]],[11,"into","","",17,[[],["u"]]],[11,"to_owned","","",17,[[["self"]],["t"]]],[11,"clone_into","","",17,[[["self"],["t"]]]],[11,"try_from","","",17,[[["u"]],["result"]]],[11,"try_into","","",17,[[],["result"]]],[11,"borrow","","",17,[[["self"]],["t"]]],[11,"borrow_mut","","",17,[[["self"]],["t"]]],[11,"type_id","","",17,[[["self"]],["typeid"]]],[11,"from","","",18,[[["t"]],["t"]]],[11,"into","","",18,[[],["u"]]],[11,"to_owned","","",18,[[["self"]],["t"]]],[11,"clone_into","","",18,[[["self"],["t"]]]],[11,"try_from","","",18,[[["u"]],["result"]]],[11,"try_into","","",18,[[],["result"]]],[11,"borrow","","",18,[[["self"]],["t"]]],[11,"borrow_mut","","",18,[[["self"]],["t"]]],[11,"type_id","","",18,[[["self"]],["typeid"]]],[11,"log","shadowtech_api::client","",1,[[["logquery"],["self"]],["response"]]],[11,"from","shadowtech_api::errors","",5,[[["error"]],["self"]]],[11,"from","","",5,[[["decodeerror"]],["self"]]],[11,"from","","",5,[[["error"]],["self"]]],[11,"from","","",5,[[["error"]],["self"]]],[11,"from","","",5,[[["parseerror"]],["self"]]],[11,"from","","",5,[[["errorkind"]],["self"]]],[11,"from","","",5,[[["str"]],["self"]]],[11,"from","","",5,[[["string"]],["self"]]],[11,"from","","",6,[[["str"]],["self"]]],[11,"from","","",6,[[["string"]],["self"]]],[11,"from","","",6,[[["error"]],["self"]]],[11,"clone","shadowtech_api::client","",0,[[["self"]],["innerresponse"]]],[11,"clone","","",3,[[["self"]],["status"]]],[11,"clone","","",1,[[["self"]],["shadow"]]],[11,"clone","","",2,[[["self"]],["shadowdynamic"]]],[11,"clone","shadowtech_api::general","",8,[[["self"]],["generalenv"]]],[11,"clone","shadowtech_api::status","",9,[[["self"]],["statusenv"]]],[11,"clone","shadowtech_api::auth","",10,[[["self"]],["authenv"]]],[11,"clone","shadowtech_api::computer","",11,[[["self"]],["computerenv"]]],[11,"clone","shadowtech_api::customer","",12,[[["self"]],["customerenv"]]],[11,"clone","shadowtech_api::dispatcher","",13,[[["self"]],["dispatcherenv"]]],[11,"clone","shadowtech_api::log","",15,[[["self"]],["logenv"]]],[11,"clone","","",16,[[["self"]],["logquery"]]],[11,"clone","","",17,[[["self"]],["logquerymetadata"]]],[11,"clone","","",18,[[["self"]],["logqueryvalues"]]],[11,"fmt","shadowtech_api::client","",0,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",3,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",1,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",2,[[["self"],["formatter"]],["result"]]],[11,"fmt","shadowtech_api::errors","",5,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",6,[[["self"],["formatter"]],["result"]]],[11,"fmt","shadowtech_api::general","",8,[[["self"],["formatter"]],["result"]]],[11,"fmt","shadowtech_api::status","",9,[[["self"],["formatter"]],["result"]]],[11,"fmt","shadowtech_api::auth","",10,[[["self"],["formatter"]],["result"]]],[11,"fmt","shadowtech_api::computer","",11,[[["self"],["formatter"]],["result"]]],[11,"fmt","shadowtech_api::customer","",12,[[["self"],["formatter"]],["result"]]],[11,"fmt","shadowtech_api::dispatcher","",13,[[["self"],["formatter"]],["result"]]],[11,"fmt","shadowtech_api::log","",15,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",16,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",17,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",18,[[["self"],["formatter"]],["result"]]],[11,"fmt","shadowtech_api::errors","",5,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",6,[[["formatter"],["self"]],["result"]]],[11,"description","","",5,[[["self"]],["str"]]],[11,"source","","",5,[[["self"]],[["option",["error"]],["error"]]]],[11,"new","","",5,[[["errorkind"],["state"]],["error"]]],[11,"from_kind","","",5,[[],["self"]]],[11,"with_chain","","",5,[[["k"],["e"]],["self"]]],[11,"kind","","",5,[[["self"]]]],[11,"iter","","",5,[[["self"]],["iter"]]],[11,"chain_err","","",5,[[["f"]],["self"]]],[11,"backtrace","","",5,[[["self"]],[["backtrace"],["option",["backtrace"]]]]],[11,"extract_backtrace","","",5,[[["error"]],[["internalbacktrace"],["option",["internalbacktrace"]]]]],[11,"serialize","shadowtech_api::log","",16,[[["self"],["__s"]],["result"]]],[11,"serialize","","",17,[[["self"],["__s"]],["result"]]],[11,"serialize","","",18,[[["self"],["__s"]],["result"]]]],"p":[[3,"InnerResponse"],[3,"Shadow"],[3,"ShadowDynamic"],[4,"Status"],[8,"ToResp"],[3,"Error"],[4,"ErrorKind"],[8,"ResultExt"],[3,"GeneralEnv"],[3,"StatusEnv"],[3,"AuthEnv"],[3,"ComputerEnv"],[3,"CustomerEnv"],[3,"DispatcherEnv"],[8,"ShadowLog"],[3,"LogEnv"],[3,"LogQuery"],[3,"LogQueryMetadata"],[3,"LogQueryValues"]]};
addSearchOptions(searchIndex);initSearch(searchIndex);
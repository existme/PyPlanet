Search.setIndex({docnames:["api/apps","api/contrib_command","api/contrib_map","api/contrib_permission","api/contrib_player","api/contrib_setting","api/core_exceptions","api/core_instance","api/core_ui","api/index","api/views","apps/contrib/admin","apps/contrib/jukebox","apps/contrib/karma","apps/contrib/local_records","apps/contrib/mapinfo","apps/contrib/players","apps/index","apps/lifecycle","apps/migrations","apps/models","changelog","convert/index","core/architecture","core/index","index","intro/configuration","intro/index","intro/installation","intro/starting","privacy","support","todo"],envversion:51,filenames:["api/apps.rst","api/contrib_command.rst","api/contrib_map.rst","api/contrib_permission.rst","api/contrib_player.rst","api/contrib_setting.rst","api/core_exceptions.rst","api/core_instance.rst","api/core_ui.rst","api/index.rst","api/views.rst","apps/contrib/admin.rst","apps/contrib/jukebox.rst","apps/contrib/karma.rst","apps/contrib/local_records.rst","apps/contrib/mapinfo.rst","apps/contrib/players.rst","apps/index.rst","apps/lifecycle.rst","apps/migrations.rst","apps/models.rst","changelog.rst","convert/index.rst","core/architecture.rst","core/index.rst","index.rst","intro/configuration.rst","intro/index.rst","intro/installation.rst","intro/starting.rst","privacy.rst","support.rst","todo.rst"],objects:{"pyplanet.apps":{AppConfig:[0,1,1,""],Apps:[0,1,1,""]},"pyplanet.apps.AppConfig":{app_dependencies:[0,2,1,""],game_dependencies:[0,2,1,""],human_name:[0,2,1,""],import_app:[0,3,1,""],is_game_supported:[0,4,1,""],is_mode_supported:[0,4,1,""],label:[0,2,1,""],mode_dependencies:[0,2,1,""],name:[0,2,1,""],on_destroy:[0,4,1,""],on_init:[0,4,1,""],on_start:[0,4,1,""],on_stop:[0,4,1,""],path:[0,2,1,""],ui:[0,2,1,""]},"pyplanet.apps.Apps":{discover:[0,4,1,""],init:[0,4,1,""],populate:[0,4,1,""],start:[0,4,1,""]},"pyplanet.contrib":{command:[1,0,0,"-"],map:[2,0,0,"-"],permission:[3,0,0,"-"],player:[4,0,0,"-"],setting:[5,0,0,"-"]},"pyplanet.contrib.command":{Command:[1,1,1,""],CommandManager:[1,1,1,""],ParameterParser:[1,1,1,""],exceptions:[1,0,0,"-"]},"pyplanet.contrib.command.Command":{add_param:[1,4,1,""],get_params:[1,4,1,""],handle:[1,4,1,""],match:[1,4,1,""],usage_text:[1,2,1,""]},"pyplanet.contrib.command.CommandManager":{register:[1,4,1,""]},"pyplanet.contrib.command.ParameterParser":{add_param:[1,4,1,""],errors:[1,2,1,""],is_valid:[1,4,1,""],parse:[1,4,1,""],parse_parameter:[1,4,1,""]},"pyplanet.contrib.command.exceptions":{InvalidParamException:[1,5,1,""],NotValidated:[1,5,1,""]},"pyplanet.contrib.map":{MapManager:[2,1,1,""],exceptions:[2,0,0,"-"]},"pyplanet.contrib.map.MapManager":{add_map:[2,4,1,""],current_map:[2,2,1,""],get_map:[2,4,1,""],handle_map_change:[2,4,1,""],maps:[2,2,1,""],next_map:[2,2,1,""],remove_map:[2,4,1,""],save_matchsettings:[2,4,1,""],set_current_map:[2,4,1,""],set_next_map:[2,4,1,""],upload_map:[2,4,1,""]},"pyplanet.contrib.map.exceptions":{MapException:[2,5,1,""],MapIncompatible:[2,5,1,""],MapNotFound:[2,5,1,""]},"pyplanet.contrib.permission":{PermissionManager:[3,1,1,""],exceptions:[3,0,0,"-"]},"pyplanet.contrib.permission.PermissionManager":{get_perm:[3,4,1,""],has_permission:[3,4,1,""],on_start:[3,4,1,""],register:[3,4,1,""]},"pyplanet.contrib.player":{PlayerManager:[4,1,1,""],exceptions:[4,0,0,"-"]},"pyplanet.contrib.player.PlayerManager":{get_player:[4,4,1,""],handle_connect:[4,4,1,""],handle_disconnect:[4,4,1,""],on_start:[4,4,1,""],online:[4,2,1,""]},"pyplanet.contrib.player.exceptions":{PlayerNotFound:[4,5,1,""]},"pyplanet.contrib.setting":{Setting:[5,1,1,""],exceptions:[5,0,0,"-"],manager:[5,0,0,"-"]},"pyplanet.contrib.setting.Setting":{__init__:[5,4,1,""],__weakref__:[5,2,1,""],clear:[5,4,1,""],get_model:[5,4,1,""],get_value:[5,4,1,""],initiate_setting:[5,4,1,""],serialize_value:[5,4,1,""],set_value:[5,4,1,""],type_name:[5,2,1,""],unserialize_value:[5,4,1,""]},"pyplanet.contrib.setting.exceptions":{SerializationException:[5,5,1,""],SettingException:[5,5,1,""],TypeUnknownException:[5,5,1,""]},"pyplanet.contrib.setting.manager":{AppSettingManager:[5,1,1,""],GlobalSettingManager:[5,1,1,""]},"pyplanet.contrib.setting.manager.AppSettingManager":{get_all:[5,4,1,""],get_categories:[5,4,1,""],register:[5,4,1,""]},"pyplanet.contrib.setting.manager.GlobalSettingManager":{create_app_manager:[5,4,1,""],get_all:[5,4,1,""],get_app_manager:[5,4,1,""],get_apps:[5,4,1,""],get_categories:[5,4,1,""],recursive_settings:[5,2,1,""]},"pyplanet.core":{exceptions:[6,0,0,"-"],instance:[7,0,0,"-"],ui:[8,0,0,"-"]},"pyplanet.core.exceptions":{AppRegistryNotReady:[6,5,1,""],ImproperlyConfigured:[6,5,1,""],InvalidAppModule:[6,5,1,""],SignalException:[6,5,1,""],SignalGlueStop:[6,5,1,""],TransportException:[6,5,1,""]},"pyplanet.core.instance":{Controller:[7,6,1,""],Instance:[7,1,1,""]},"pyplanet.core.instance.Instance":{start:[7,4,1,""]},"pyplanet.core.ui":{components:[8,0,0,"-"],exceptions:[8,0,0,"-"],filters:[8,0,0,"-"],loader:[8,0,0,"-"],template:[8,0,0,"-"]},"pyplanet.core.ui.components":{DynamicManiaLink:[8,1,1,""],StaticManiaLink:[8,1,1,""]},"pyplanet.core.ui.components.DynamicManiaLink":{destroy:[8,4,1,""],destroy_sync:[8,4,1,""],display:[8,4,1,""],handle_catch_all:[8,4,1,""],hide:[8,4,1,""],render:[8,4,1,""],subscribe:[8,4,1,""]},"pyplanet.core.ui.components.StaticManiaLink":{destroy:[8,4,1,""],destroy_sync:[8,4,1,""],display:[8,4,1,""],handle_catch_all:[8,4,1,""],hide:[8,4,1,""],render:[8,4,1,""],subscribe:[8,4,1,""]},"pyplanet.core.ui.exceptions":{ManialinkMemoryLeakException:[8,5,1,""],UIException:[8,5,1,""]},"pyplanet.core.ui.loader":{PyPlanetLoader:[8,1,1,""]},"pyplanet.core.ui.template":{Template:[8,1,1,""]},"pyplanet.views":{base:[10,0,0,"-"],template:[10,0,0,"-"]},"pyplanet.views.base":{View:[10,1,1,""]},"pyplanet.views.base.View":{destroy:[10,4,1,""],destroy_sync:[10,4,1,""],display:[10,4,1,""],handle_catch_all:[10,4,1,""],hide:[10,4,1,""],render:[10,4,1,""],subscribe:[10,4,1,""]},"pyplanet.views.generics":{alert:[10,0,0,"-"],list:[10,0,0,"-"]},"pyplanet.views.generics.alert":{AlertView:[10,1,1,""],PromptView:[10,1,1,""]},"pyplanet.views.generics.alert.AlertView":{__init__:[10,4,1,""],close:[10,4,1,""]},"pyplanet.views.generics.alert.PromptView":{wait_for_input:[10,4,1,""]},"pyplanet.views.generics.list":{ListView:[10,1,1,""],ManualListView:[10,1,1,""]},"pyplanet.views.generics.list.ListView":{close:[10,4,1,""],display:[10,4,1,""],refresh:[10,4,1,""],single_list:[10,2,1,""]},"pyplanet.views.generics.list.ManualListView":{get_data:[10,4,1,""]},"pyplanet.views.template":{TemplateView:[10,1,1,""]},"pyplanet.views.template.TemplateView":{destroy:[10,4,1,""],destroy_sync:[10,4,1,""],display:[10,4,1,""],get_context_data:[10,4,1,""],get_player_data:[10,4,1,""],handle_catch_all:[10,4,1,""],hide:[10,4,1,""],render:[10,4,1,""],subscribe:[10,4,1,""]},pyplanet:{apps:[0,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","staticmethod","Python static method"],"4":["py","method","Python method"],"5":["py","exception","Python exception"],"6":["py","data","Python data"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:staticmethod","4":"py:method","5":"py:exception","6":"py:data"},terms:{"001_name":[17,19],"abstract":[5,10,27,28],"boolean":[1,2,3],"break":10,"byte":[],"case":[26,27],"catch":30,"class":[0,1,2,3,4,5,7,8,10,17,19,20],"default":[1,2,5,10,17,19,20,26,27,28,30],"function":[0,10,11,12,13,14,15,16,21,26,27,30],"import":[0,5,7,17,20,26,27,30],"int":[1,10],"new":[3,10,13,14,15,17,19,20,26,27],"null":[17,20],"public":[26,27],"return":[1,2,3,4,5,8,10],"static":0,"super":10,"switch":[17,18],"throw":[4,6],"true":[1,5,7,10,17,20,26,27],"try":[1,10],"while":[26,27],But:[10,17,18,26,27],For:[5,17,18,20,26,27,30],Not:10,THE:[],The:[0,1,2,3,4,5,6,7,8,10,17,18,20,23,24,25,26,27,28],There:[17,20],USE:[],Use:[1,5,10,27,28],Using:[26,27],Will:[8,10],With:[27,28],__delattr__:[],__dir__:[],__eq__:[],__format__:[],__ge__:[],__getattribute__:[],__gt__:[],__hash__:[],__init__:[5,10,17,20],__le__:[],__lt__:[],__ne__:[],__new__:[],__reduce__:[],__reduce_ex__:[],__repr__:[],__setattr__:[],__sizeof__:[],__str__:[],__subclasscheck__:[],__subclasshook__:[],__weakref__:5,_baseuimanag:10,_control:7,_meta:[17,19],_set:5,_valu:5,abc:[],abcmeta:[],abil:3,abl:[10,17,19,20,26,27],about:[5,17,19,20,25,26,27,28,30],abov:[27,28],access:[7,26,27,30],accur:[],act:10,action:[8,10,17,18],action_delet:10,activ:[17,18,26,28],add:[1,2,21,26,27,30],add_column:[17,19],add_map:2,add_param:1,adjust:[10,17,20,26,27],admin:[1,3,12,21,25,26,27],adminconfig:[26,27],administr:[27,28],after:[0,2,10,17,18,26,27,28,29],again:[11,17,18],agdf:[],aim:10,alert:10,alertview:10,algorithm:[],alias:1,all:[0,1,3,5,7,8,10,17,18,20,26,27,28,30],allow:[0,3,30],almost:5,alreadi:0,also:[4,8,10,25,26,27,28,30],altern:[10,27,28],alwai:[10,27,29],analys:30,ani:[0,1,2,10,12,17,18,27,28,30,31],anoth:[17,18,26,27],anymor:[17,18],anywher:7,api:25,app:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18,19,20,25,28,30],app_config:5,app_depend:0,app_label:[8,10],app_modul:0,app_nam:[0,17,20],appconfig:[0,5],appear:[11,17,19],append:[8,10],applic:[0,27,28],appregistrynotreadi:6,appsettingmanag:5,appuimanag:[],architectur:[25,26,27,32],area:11,arg:10,argument:[1,10],argv:1,arrai:[1,10],ask:[10,17,20,30],asterisk:[17,20,30],async:[5,8,10,26,27],asyncio:[7,25],asyncssh:[26,27],author:[0,10],autocommit:[26,27],autom:30,automat:[8,10,17,19,20,26,27],autosav:[26,27],avail:[5,17,20,25,26,27],await:[5,10,17,20],awar:[8,10,26,27],backend:5,backward:10,ban:21,base:[0,5,7,8,10,13,17,18,19,20,25,30],basic:[15,21,27,28,30],bat:[27,28,29],becaus:[25,26,27,28],been:[0,1,5,17,18,26,27],befor:[0,1,3,4,5,10,17,18],begin:21,behaviour:[10,30],being:[0,4,17,18,26,27],bellow:[10,23,24,26,27,28],better:[17,19],bin:[27,28,29],bind:8,blacklist:21,bodi:[8,10],bool:[1,2,5],boot:[17,19,26,27],bug:25,bundl:30,button:10,bytesio:2,cach:[],call:[0,1,2,4,5,8,10,17,18,26,27,30],callback:[1,4,12,13,14,15],can:[2,5,10,11,17,19,20,25,26,27,28,30],canyon_serv:[27,28],captur:30,care:[8,17,18],cast:13,cat_featur:5,categori:5,chang:[5,10,11,17,19,26,27,30],changelog:25,charfield:[17,19,20],charset:[26,27],chat:[1,11,21],check:[3,27,28],choic:[5,10],circular:7,cjb:12,classmethod:0,cleanup:[26,27],clear:[5,17,18,21],clearjukebox:12,cli:[26,27,28],click:10,client:[8,10,26,27],client_kei:[26,27],close:10,cmd:[27,28],code:[5,17,19,25,30],column:[10,17,20],com:[25,26,27,28,31],come:[26,27,28],command:[0,7,9,25,26,27,28,29],command_manag:7,commandmanag:1,commun:[2,17,18],compat:10,compil:[27,28],complet:[],compon:[7,8,17,18],condit:[17,20],config:[2,5],configur:[0,2,6,25,28,29,30],connect:[4,17,18],contact:25,contain:[0,1,2,5,7,10,27,28],content:[10,19],context:[0,2,5,10,17,18,27,28],contrib:[7,9,11,12,13,14,15,16,25,26,27],contribut:[1,26,27,30],control:[1,7,25,26,27,29],copi:[27,28],core:[1,2,3,4,9,10,11,12,13,14,15,16,17,20,23,25,26,27,30],coroutin:[17,18],correctli:4,could:[0,10,17,18,20,27,28],count:5,coupl:25,creat:[2,5,10,20,26,27,28],create_app_manag:5,created_at:[17,20],current:[1,2,4,10,11,12,13,14,16,17,18,21,22,26,27,32],current_map:2,custom:[1,10],custom_opt:[26,27],cycl:25,data:[1,5,8,10,17,18,20,30],databas:[2,4,5,7,10,17,20],datastorag:5,date:[2,27,28],db_tabl:[17,19],decid:[0,2],declar:[0,17,20],dedic:[2,4,25,28,30],def:[5,10,17,19],defin:[1,5,19],delattr:[],delet:[2,10,17,20],delete_fil:2,depend:[8,10,11,12,13,14,15,16,17,18,30],deprec:10,describ:[1,10,23,24],descript:[0,1,3,5,17,20],design:10,desir:[5,27,28],dest:1,destin:1,destroi:[0,8,10,17,20],destroy_sync:[8,10],detect:8,develop:[17,19,25,26,27,30],dict:[1,2,5,10],dictionari:[10,26,27],differ:[10,26,27],dir:[],directli:[2,26,27],directori:[2,27,28],disappear:10,disconnect:4,discov:0,displai:[1,5,8,10,15,21],distribut:[27,28],django:[17,19],doc:[25,30],document:[5,17,20,23,24,26,27,30,32],doe:[27,28],doesn:[26,27,28],doing:10,don:[0,1,2,3,4,5,17,18,20,26,27,28,30],done:[0,30],dont:[],downgrad:[17,19],driver:[26,27],drop:21,dure:[27,29],dynamicmanialink:8,each:10,earli:[],easi:[27,28],either:[17,20,27,28,30],element:[17,18],empti:[2,11],enabl:[5,12,13,14,29],end:[5,10],engin:[8,17,19,26,27],english:3,enough:10,enter:10,entri:[0,10,32],env:[27,28,29],environ:26,error:[1,6],escap:10,etc:[26,27,28],even:[26,27],event:[7,25],everi:[17,20,26,27,28],exampl:[0,1,5,10,17,18,20,26,27,28,30,32],except:[1,2,4,5,8,9,10,17,19,20,25,26,27,30],execut:[0,1,6,8,10,17,19,20,27,28,29],exist:[2,17,19],exit:[17,18],expect:5,explan:[26,27],extens:1,fals:[0,1,2,5,8,10,17,20],featur:[5,8,21,22,25,32],feature_a:5,feature_b:5,feel:[17,20],few:[17,20,26,27],field:[10,19],file:[2,8,17,19,20,26,27,28,29,30],filenam:[2,26,27],fill:[17,20,26,27],filter:30,find:[5,17,20,26,27],finish:[],fire:1,first:[12,17,19,20,21,26,27],flow:12,folder:[2,17,19,20,27,28,29],follow:[10,17,18,19,20,26,27,28,29],fontawesom:10,forc:5,format:[5,10,17,20],formatt:[],forum:31,forward:[26,27,30],found:[2,4,5],free:[17,20],friendli:5,from:[0,1,2,4,5,7,10,11,12,17,18,19,20,25,26,27,28],ftp:[26,27],full:[1,26,27,30],fulli:[17,18,26,27,30],further:[17,20],futur:10,game:[0,1,7,11,12,13,14,15,16,17,18],game_depend:0,gbx:[2,7],gener:[2,8,26,27],get:[1,2,3,4,5,7,10,17,20,25,26,28,30],get_act:10,get_al:5,get_app:5,get_app_manag:5,get_categori:5,get_context_data:10,get_data:10,get_field:10,get_map:2,get_model:5,get_param:1,get_perm:3,get_play:4,get_player_data:10,get_queri:10,get_templ:10,get_valu:5,getattr:[],github:[25,27,28,31],give:[2,10,26,27,28],given:[0,1,5,6,8,10,26,27],global:[5,7,8,10,27,28],globalsettingmanag:5,glue:[2,4,6,17,20],going:[2,10,17,18,26,27],got:6,halt:30,handl:[1,3,4,8,10,13,17,19,30],handle_catch_al:[8,10],handle_connect:4,handle_disconnect:4,handle_map_chang:2,handler:[2,8,10,25],happend:30,has:[0,3,5,11,26,27,30],has_permiss:3,hash:[],hasn:1,have:[5,10,14,17,18,20,25,26,27,28,29,30,31],head:[27,29],help:[1,5,17,20,26,27,28],help_text:[17,20],helper:[],here:[5,10,17,19,20,26,27],hide:[8,10,17,18],hide_click:[8,10],hold:0,home:[26,27],hook:0,host:[2,26,27,30],hostnam:[26,27],how:[26,27,28,29,30],howev:[27,28],html:[17,20],http:[17,18,20,25,26,27,28,30,31],human_nam:0,icons64x64_1:10,id_rsa:[26,27],identifi:[4,26,27],ignor:[8,10,11,21],implement:[8,17,18,19,26,27],import_app:0,improperlyconfigur:6,improv:30,in_ord:0,incap:[17,18],includ:[2,11,17,19,20,30],index:[10,17,20,25,27,28],infinit:1,info:[2,25],inform:[0,1,2,4,5,7,17,19,20,25,26,27,30],inherit:[10,17,20],init:[0,5,17,18],init_project:[27,28],initi:[0,1,2,3,4,5,10,17,18],initiate_set:5,input:[1,5,10],insert:2,insid:[4,5,6,10,17,18,26,27,30],instabl:30,instal:[25,26,29,30],instanc:[0,1,2,3,4,5,8,9,10,17,20,25,26,27,28],instant:5,instead:[5,8],instruct:[5,27,28,29],integ:[1,10],integerfield:[17,20],intens:[17,20],intern:[17,18],introduct:[1,2,3,4,32],invalid:[1,2,6],invalidappmodul:6,invalidparamexcept:1,investig:[26,27],invok:6,is_game_support:0,is_mode_support:0,is_valid:1,isn:[0,17,18],issu:[27,28],issubclass:[],item:10,its:[27,28],itself:[1,6,27,29],jinja2:[8,10],juke:12,jukebox:[21,25,26,27],jukeboxconfig:[26,27],jump:2,just:[0,3,4,17,18,26,27],karma:[21,25,26,27],karmaconfig:[26,27],keep:[1,5,10,27,28,30],kei:[4,5,10,26,27,30],kick:21,kind:30,kindli:30,know:[4,10,17,20,26,27,30],known:30,known_host:[26,27],kwarg:[8,10,26,27],label:[0,3,5,17,20],larg:[26,27],last:12,later:[25,27,28],latest:[17,20,26,27],lazi:[7,8],leak:[8,30],least:[17,19,30],leav:2,level:[3,11,12,17,20,30],life:25,like:[0,1,5,10,17,18,19,26,27,30],line:[1,10,30],link:10,linux:[27,28,29],list:[0,1,2,4,5,8,10,13,14,16,21,26,27],listen:10,listview:10,load:[0,2,17,20,26,27],loader:8,local:[5,10,17,18,21,25,26,27,28,30],local_record:[14,21,26,27],localdriv:[26,27],localhost:[26,27],localrecordsconfig:[26,27],locat:[26,27,29],logging_report:30,logic:1,login:[4,8,10,11,17,20,26,27,30],look:[5,17,20,26,27],loop:[7,25],lot:[17,20],mac:[27,29],machin:[26,27],mai:[26,27],main:[11,25],mainli:5,make:[2,3,10,17,18,19,26,27],manag:[1,2,3,4,5,7,8,10,17,18,26,27,28,29],mang:3,manialink:[8,10],manialinkmemoryleakexcept:8,maniaplanet:[1,2,4,8,10,11,12,13,14,15,16,17,20,25,26,27,28,31],maniascript:8,manipul:10,manual:[26,27,28],manuallistview:10,map:[4,7,9,17,20,21,25,30],map_begin:[2,13,14,15],map_end:2,map_manag:7,map_matchset:[26,27],mapexcept:2,mapincompat:2,mapinfo:[2,15],maplist:21,mapmanag:2,mapnotfound:2,mariadb:[26,27],master:[26,27],match:[1,26,27],matchset:[2,26,27],max_length:[17,20],mayb:31,mean:[17,18],meantim:[17,20],member:30,memori:[0,8,10,17,18,30],messag:[10,11,30],meta:[17,19,20],metadata:0,method:[6,8,10,17,18,27,28,30],migrat:[20,25],min_level:[3,17,20],minimum:[3,17,20,30],misconfigur:6,mode:[0,17,18,30],mode_depend:0,model:[0,1,2,4,5,10,18,19,25],modul:[9,17,19,25,26,27,28,30],moment:[17,18,20],more:[0,5,17,19,20,26,27],most:[17,20,26,27,28],mostli:[8,10,17,18,20,26,27,30],mp4:[27,28],much:10,multipl:[1,10,26,27,28],must:[2,5,30],my_app:10,my_valid:10,mysql:[17,19,26,27,28],mysqldatabas:[26,27],name:[0,1,3,5,7,8,10,11,12,13,14,15,16,17,19,20,26,27,28],namespac:[1,3,17,20],narg:1,nativ:[26,27],need:[1,10,17,19,20,26,27,28],net:25,never:[27,28],next:[2,11,12],next_map:2,non:30,none:[0,1,2,3,4,5,8,10,11,12,13,14,15,16,17,20,27,28],normal:[],notabl:8,notfound:5,notimpl:[],notvalid:1,now:[27,28],nullabl:[17,19],number:[1,17,19],object:[1,2,5,7,17,20],offer:11,often:[26,27],okai:10,old:25,older:[27,28],on_destroi:0,on_init:0,on_readi:0,on_start:[0,3,4,5],on_stop:0,onc:0,one:[2,5,8,10,12,17,20,26,27,30],onli:[3,5,8,10,17,18,21,26,27,30],onlin:[2,4],open:[10,25],oper:[18,27,28],option:[0,2,5,26,27,30],order:[0,10,17,18,26,27,28,30],organ:25,origin:32,other:[0,1,5,8,10,17,18,20,26,27],otherwis:[],our:[5,8,10],out:0,outcom:[],output:[26,27],over:[26,27],overrid:[8,10],overview:[26,27],overwrit:2,own:10,packag:[1,27,28],page:[25,27,28],pagin:10,param:1,paramet:[0,1,2,3,4,5,8,10,11,12,13,14,16],parameterpars:1,pars:1,parse_paramet:1,parser:1,pass:[17,19],passphras:[26,27],password:[21,26,27,30],past:[17,19],path:[0,8,10,30],pattern:[17,19],peewe:[17,20,26,27],peewee_async:[26,27],per:[8,10],perconadb:[26,27],perform:[26,27],perm:1,permiss:[0,7,9,11,12,13,14,16,17,20,25],permission_manag:7,permissionmanag:3,person:21,pickl:[],pip:[27,28],place:[1,30],plai:[2,4,12,17,18,21],plan:[22,32],platform:[27,28],player:[1,2,3,5,7,8,9,10,12,17,18,20,21,25],player_chat:13,player_connect:[13,14,15],player_data:[8,10],player_login:[8,10],player_manag:7,playerlist:21,playermanag:4,playernotfound:4,playlist:2,pleas:[8,10,17,18,20,26,27,31],plugin:[23,24],podium_start:12,point:[7,17,18],pool:[2,7],popul:0,port:[26,27],posit:1,postgresql:[17,19,26,27,28],postgresqldatabas:[26,27],prefetch:5,prefetch_valu:5,prefix:[8,10],preinstal:[27,28],prepar:[2,17,18],present:10,pretti:[26,27],prevent:7,primari:4,print:10,privaci:25,privat:[26,27],problem:[5,31],process:[7,25,30],process_nam:7,prog:1,project:[26,29],prompt:10,promptview:10,prop:10,properti:[5,10],protect:30,provid:[1,2,3,4,5,7,8,10,13,16,25,26,27,28,30,32],publish:[27,28],pyenv:[27,28,29],pymysql:[26,27],pypi:[25,27,28],pypla:25,pyplanet:[9,11,12,13,14,15,16,17,18,20,21,26,30,31],pyplanet_debug:[26,27],pyplanet_settings_modul:[26,27],pyplanetload:8,python3:[27,28],python:[5,17,19,25,26,27,28],pythoncentr:[27,28],queri:[10,17,20,26,27],quit:[17,19],rais:[2,5,8],raw:1,reach:[],read:0,readabl:2,readi:[0,3,6,17,18,27,28,29],readthedoc:[17,20,26,27],realli:[17,18,30],receiv:[4,6,17,18,25],recommend:[5,17,20,26,27,28],record:[5,21,25],recursive_set:5,reduc:[26,27],refer:[5,8,10,17,20,31],referenc:5,refresh:[5,10],regist:[0,1,3,5,14],registri:[0,5,6],rel:2,relat:[0,1,8,10,17,18,26,27,31],releas:21,rememb:[17,18],remot:[17,18,26,27,28],remov:[2,17,18],remove_map:2,render:[8,10],replac:30,report:[25,26,27],repr:[],repres:[17,19],request:[3,5],requir:[0,1,3,10,11,12,13,14,16,17,20,26],res:11,respond:8,restart:21,restrict:5,result:[1,10],retriev:[3,5,10,13,14],right:[0,3,27,28,30],robust:[26,27],root:[26,27,28],rpc:6,run:[26,27,28],run_forev:7,same:[8,10,27,28],sampl:[10,17,19],sample_field:[17,19],samplelistview:10,save:[1,2,5,10,17,18,20,21,26,27],save_matchset:2,schedul:[2,12],schemamigr:[17,19],scope:[17,19],scp:[26,27],script:[8,10,27,28,29,30],search:[10,17,20,25],searchabl:10,second:[10,26,27],second_col:[17,20],section:25,see:[17,20,27,28,30],seek:1,seem:30,select:[5,10,17,20],self:[0,5,10,30],send:[10,26,27,30],sensit:30,separ:[10,26,27,28],seper:11,serial:[5,30],serializationexcept:5,serialize_valu:5,server:[2,8,10,12,16,17,18,21,25,28,30],server_login:[26,27],servic:[17,18,30],set:[1,2,7,8,9,10,12,21,25,28,30],set_current_map:2,set_next_map:2,set_valu:5,setattr:[],setpassword:11,setspecpassword:11,setting_manag:[5,7],settingexcept:5,setup:[26,29],sever:[10,26,27],sftp:[26,27],sftpdriver:[26,27],share:30,shootmania:[8,10,11,12,13,15,16],should:[0,2,5,10,17,18,19,20,26,27],show:[8,10,17,18],shuffl:0,signal:[0,2,6,7,25],signal_manag:7,signalexcept:6,signalgluestop:6,signatur:[],simpl:[26,27],simultan:25,singl:[26,27],single_list:10,site:25,situat:[10,17,18],size:10,skeleton:[27,28],skip:21,small:5,snippet:[17,19],solut:10,some:[8,10,17,18,26,27,28,30],sort:10,sortabl:10,sourc:[8,25,27,28,29],space:1,spawn:[26,27],special:8,specif:[10,30],specifi:[5,8,10],spectat:[11,21],spectpass:11,split:[1,26,27],sql:[26,27],sqlite:[17,19,26,27,28],sqlitedatabas:[26,27],srvpass:11,ssh:[26,27],stabil:30,stabl:[17,18],start:[0,3,4,7,17,18,20,25,26,28,31],startup:[3,4,17,18],state:1,staticmanialink:[8,10],stop:[0,6,17,18,30],storag:[2,5,7],storageexcept:2,store:[1,5,8,10,14,26,27,30],str:[1,2,3,5,10],straight:[26,27],string:[1,2,5,6,8,10],strip:1,stuff:0,style:[1,10],subfold:[26,27],submanag:5,subprocess:[26,27],subscrib:[8,10],substyl:10,successfulli:0,sudo:[27,28],suit:[2,5],summari:[27,28],superadmin:[26,27],support:[17,18,25,26,27],sure:[3,10,17,18,19,27,28],symbol:10,sync:[8,10],system:[25,30],tabl:[17,20],tag:[],take:[8,17,18,20],target:[1,8,10],team:30,tell:30,templat:[8,10],template_nam:10,template_packag:[],templateview:10,termin:[27,29],test:[10,17,19,26,27],testmodel:[17,19],text:[1,10],textfield:[17,20],thei:0,them:30,therefor:[26,27,30],thi:[0,1,2,3,4,5,6,7,8,10,11,12,13,14,16,17,18,19,20,22,26,27,28,29,30,32],thing:[0,10],those:[10,17,20],three:11,through:[27,28],throw_except:[8,10],thrown:[6,8],time:[8,10,17,18,20,26,27,28],timedmodel:[17,20],timeout:[8,10],titl:10,todo:25,toff:[17,20,30],too:[2,10,26,27],took:1,tool:[27,28,30],topic:[17,20,22,32],touch:30,toward:30,trace:30,traceback:30,trackmania:[8,10,11,12,13,14,15,16],transit:10,transport:6,transportexcept:6,tree:[17,18,20],tunnel:6,tupl:5,two:[17,20,26,27],txt:[26,27],type:[1,2,4,5],type_nam:5,typeunknownexcept:5,ui_manag:7,uid:2,uiexcept:8,unauthor:30,uncaught:30,undefin:10,under:25,unicod:10,unignor:11,uniqu:[5,17,19,20],unknown:[5,17,19],unless:10,unload:[0,17,18],unseri:5,unserialize_valu:5,updat:[8,10,13,14,15,17,20,27,28],updated_at:[17,20],upgrad:[17,19,27,28],upload:2,upload_map:2,usag:[1,3,10],usage_text:1,use:[1,2,5,8,10,17,19,20,25,26,27,28],used:[1,5,8,10,17,18],useful:[0,10,27,28],user:[5,8,10,25,26,27,28,30],user_input:10,usernam:[26,27],uses:10,using:[10,25,26,27,28],utf8:[26,27],valid:[1,10,17,18],valu:[1,5,8,10,17,20,26,27],vanish:8,variabl:[7,10,17,18,26,27,30],verbos:[26,27],veri:[7,17,20],version:[0,8,10,27,28],via:8,view:[8,9,25],virtual:29,virtualenv:28,vote:21,wai:[7,27,28],wait:[10,17,18],wait_for_input:10,want:[1,2,5,17,19,26,27,28],weak:5,well:[17,19],what:[10,21,30],when:[0,1,2,5,8,17,18,20,26,27,28,30],where:[17,19,20,26,27,28,29,30],which:[10,26,27],who:21,whokarma:[13,21],whole:30,why:[26,27],widget:[13,14,15],window:[27,28,29],without:1,won:[11,26,27,28],work:[10,17,19,25,26,27],would:[17,18],wrapper:[7,27,28],write:[1,2,3,4,23,24,26,27,32],xml:[6,10],yet:[0,5,6,8,17,18,19,20,26,27,28],you:[0,1,2,5,10,17,18,19,20,26,27,28,29,30,31],your:[0,1,5,6,10,17,18,19,20,26,27,28,29,30],yourself:[1,2,3,4,5,27,28]},titles:["pyplanet.apps","pyplanet.contrib.command","pyplanet.contrib.map","pyplanet.contrib.permission","pyplanet.contrib.player","pyplanet.contrib.setting","pyplanet.core.exceptions","pyplanet.core.instance","pyplanet.core.ui","API Documentation","pyplanet.views","Admin","Jukebox","Karma","Local Records","Map Info","Players","Apps","Life Cycle","Migrations","Models","Changelog","Migrating from old controller","Architecture","Core","Welcome to PyPlanet&#8217;s documentation!","Configuration","Getting Started","Installation","Starting PyPlanet","Privacy","Support, Bug report &amp; Contact","Todo (docs)"],titleterms:{activ:[27,29],admin:11,api:9,app:[0,17,21,26,27],architectur:[23,24],ban:11,base:[26,27],begin:[13,14,15],bug:31,cach:[26,27],changelog:21,chat:13,clear:12,command:[1,11,12,13,14,15,16],configur:[26,27],connect:[13,14,15],contact:31,content:[17,24],contrib:[1,2,3,4,5,21],control:22,core:[6,7,8,21,24],creat:[17,19],cycl:[17,18],databas:[26,27],debug:[26,27],dedic:[26,27],defin:[17,20,26,27],displai:[12,13,14,16],doc:32,document:[9,25],drop:12,enabl:[26,27],environ:[27,28],error:30,except:6,featur:[11,12,13,14,15,16],field:[17,20],finish:14,from:22,gener:10,get:27,handler:[11,12,13,14,15,16],indic:25,info:15,inform:[11,12,13,14,15,16],instal:[27,28],instanc:7,jukebox:12,karma:13,kick:11,life:[17,18],link:25,list:12,local:14,map:[2,11,12,13,14,15,26,27],maplist:12,migrat:[17,19,22],mode:[26,27],model:[17,20],mute:11,old:22,on_destroi:[17,18],on_init:[17,18],on_start:[17,18],on_stop:[17,18],oper:[17,20],owner:[26,27],password:11,permiss:3,player:[4,11,13,14,15,16],playerlist:16,podium:12,pool:[26,27],privaci:30,project:[27,28],pyplanet:[0,1,2,3,4,5,6,7,8,10,25,27,28,29],record:14,report:[30,31],requir:[27,28],restart:11,server:[11,26,27],set:[5,11,26,27],setup:[27,28],signal:[11,12,13,14,15,16],skip:11,start:[12,27,29],storag:[26,27],support:31,system:[27,28],tabl:25,todo:[1,2,3,4,5,22,23,24,32],unban:11,unmut:11,unreleas:21,view:10,virtual:[27,28],virtualenv:[27,29],vote:13,welcom:25}})
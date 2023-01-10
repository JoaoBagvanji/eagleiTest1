var mongoose=require("mongoose");
var jobcardprojectSchema=new mongoose.Schema({
	// jobcard_conttemp:Number,
	jobcard_cod:{type:String, unique:true},
	data_registojobcard:{type:Date, 'default':Date.now},
	data_registojobcard1:String,
	data_ultimaactualizacaojobcard:{type:Date, 'default':Date.now},
	jobcard_callcentercomments:[String],
	jobcard_wait:String,
	jobcard_estadoactual:String,
	jobcard_holdaction:String,
	jobcard_holdreason:String,
	jobcard_call:String,
	jobcard_projectnumber:String,
	ttnumber_status:String,
	jobcard_departamento:String,
	jobcard_regiao:String,
	jobcard_jobtype:String,
	provincia:String,
	local:String,
	geolocalizacao:[{
		latitude:String,
		longitude:String}],
	origem:{latitude:String,
			longitude:String},
	jobcard_priority:String,
	pessoacontacto_nome:String,
	jobcard_reportnmcoperator:String,
	jobcard_jobinfo:String,
	jobcard_tecniconome:String,
	jobcard_tecnicoid:String,
	jobcard_analisederisco:{jobcard_risk1:String, jobcard_risk2:String, jobcard_risk3:String, jobcard_risk4:String, jobcard_risk5:String, jobcard_risk6:String, jobcard_risk7:String, jobcard_risk8:String, jobcard_risk9:String, jobcard_risk10:String, jobcard_risk11:String, jobcard_risk12:String, jobcard_risk13:String, jobcard_risk14:String, jobcard_risk15:String, jobcard_risk16:String, jobcard_risk17:String, jobcard_risk18:String, jobcard_risk19:String, jobcard_radiocomments:String},
	jobcard_analisederiscoAmbiental:{jobcard_risk21:String, jobcard_risk22:String, jobcard_risk23:String, jobcard_risk24:String, jobcard_risk25:String, jobcard_risk26:String, jobcard_risk27:String, jobcard_risk28:String, jobcard_radiocomments2:String},
	jobcard_cell:String,
	jobcard_linemanager:String,
	jobcard_linemanagerid:String,
	spares_usados:[{
		descricao:String,
		quantidade:String,
		referencia:String
	}],
	jobcard_linemanagercell:String,
	jobcard_loggedby:String,
	jobcard_departamentoid:String,
	jobcard_loggedon:String,
	jobcard_datacreated:String,
	jobcard_quotacao:String,
	photoinfo:[String],
	jobcard_clientenome:String,
	assistentes:[{nome:String, referencia:String}],
	jobcard_clienteid:String,
	jobcard_site:[String],
	jobcard_clientebranch:String,
	jobcard_clientetelefone:String,
	jobcard_controlador:[Number],
	jobcard_razaoreprovar:String,
	jobcard_controladorintervenientes:[String],
	jobcard_travelinfo_proposito:String,
	jobcard_planneddate:String,
	jobcard_planneddatems:Number,
	jobcard_planneddate5beforems:Number,
	jobcard_planneddate5afterms:Number,
	jobcard_workstatus:String,
	jobcard_traveldurationms:Number,
	assinatura:String,
	viatura:String,
	data_inicio:String,
	jobcard_backofficeagent:String,
	jobcard_remedialaction:String,
	jobcard_healthsafety:String,
	jobcard_hsreason:String,
	jobcard_maintenancedate:{type:Date},
	jobcard_tecarrivaldate:String,
	jobcard_tecarrivaltime:String,
	jobcard_sitearrivaldate:String,//maintenancedate
	jobcard_sitearrivaltime:String,
	jobcard_tecarrivalduration:String,
	jobcard_sitedeparturedate:String,
	jobcard_sitedeparturetime:String,
	jobcard_arrivaldepartureduration:String,
	jobcard_audittrail:[{jobcard_audittrailname:String, jobcard_audittrailaction:String, jobcard_audittraildate:String}],
	geolocationJobcardInfo:[{jobcard_latitude:String, jobcard_longitude:String}],
	generatorArrayJobcard:[{jobcard_generatorname:String, jobcard_generator:String, jobcard_generatormobilefixed:String,jobcard_previousgeneratorhrs:String,jobcard_currentgeneratorhours:String, jobcard_previousrefuelhrs:String,jobcard_generatorrefuel:String,jobcard_litersoil:String, jobcard_dsc:String,jobcard_refuelreason:String,jobcard_generatorbeenserviced:String, jobcard_priceperliter:String}],
	equipamentoArrayJobcard:[{jobcard_equiptype:String, jobcard_manufacturer:String, jobcard_model:String, jobcard_serialnumber:String, jobcard_capacity:String, jobcard_type:String}],
	sparesArrayJobcard:[{jobcard_itemid:String,jobcard_item:String,jobcard_quantityuse:Number, jobcard_datauso:String, jobcard_itemserialized:String, jobcard_itemnrserie:String, jobcard_itemreplace:String, jobcard_itemreplacereason:String, jobcard_nomeitemreplace:String}],
	jobcardsignage:{jobcard_idpresent:String,jobcard_vmlogopresent:String, jobcard_signnotice:String, jobcard_cautionladder:String,jobcard_cautioncabletray:String, jobcard_noticedoor:String, jobcard_warningstick:String, jobcard_rooftopdoorlocked:String, jobcard_accesscontrolrooftop:String, jobcard_signagecomments:String},
	jobcardcontainer:{jobcard_containerligth:String, jobcard_testemergency:String, jobcard_powersockets:String, jobcard_testearth:String, jobcard_circuitbreakers:String, jobcard_surgearrestors:String, jobcard_electricalconnections:String, jobcard_labelling:String, jobcard_earthconnections:String, jobcard_powerskirting:String},
	jobcardmast:{jobcard_awlight:String, jobcard_connectligthswitches:String, jobcard_surgeprotection:String, jobcard_cleaninside:String, jobcard_reportdamage:String, jobcard_sealentries:String,jobcard_mountingsfeeders:String, jobcard_rustcable:String, jobcard_mastcomments:String},
	jobcardcleaning:{jobcard_servicefence:String, jobcard_cleansite:String, jobcard_cleanweed:String, jobcard_poisontreament:String, jobcard_removerubbish:String, jobcard_anydefects:String, jobcard_cleaningcomments:String},
	jobcardlocks:{jobcard_locksgate:String, jobcard_locksP3:String, jobcard_locksgenset:String, jobcard_lockscontainer:String, jobcard_locksM3:String, jobcard_lockscomments:String},
	jobcardenvironmental:{jobcard_siteerosion:String, jobcard_groundcover:String, jobcard_oildiesel:String, jobcard_overallsite:String, jobcard_environmentalcomments:String},
	jobcardfallarrest:{jobcard_visiblestate:String, jobcard_fallarrestcomments:String},
	jobcardgeneratorinfo:{jobcard_startupdelay:String, jobcard_mainsrestore:String, jobcard_loadR:String, jobcard_loadwhiteS:String, jobcard_loadblueT:String, jobcard_frequency:String, jobcard_batteryvoltage:String, jobcard_batterycharging:String, jobcard_coolantlevel:String, jobcard_oilpressure:String, jobcard_generatorinfocomments:String, jobcard_oilfilter:String, jobcard_oillevel:String, jobcard_oilleaks:String, jobcard_radiatorhoses:String, jobcard_airfilter:String, jobcard_coolantleaks:String, jobcard_fuelfilter:String, jobcard_vbelt:String, jobcard_fuelleaks:String, jobcard_preruncontrol:String, jobcard_chargeralarms:String, jobcard_failmains:String, jobcard_abnormalvibrations:String, jobcard_airflowradiator:String, jobcard_waterpump:String, jobcard_externalalarms:String, jobcard_testruncomments:String, jobcard_switchauto:String, jobcard_externalclear:String, jobcard_postruncomments:String},
	jobcardedBoardinfo:{jobcard_tightenconnect:String, jobcard_energymeters:String, jobcard_unauthorizedconnect:String, jobcard_holessealed:String, jobcard_sitelight:String, jobcard_meterbox:String, jobcard_autorearm:String, jobcard_edBoardcomments:String},
	jobcardelectricalinfo:{jobcard_currentreadingsred:String, jobcard_currentreadingswhite:String, jobcard_currentreadingsblue:String, jobcard_currentreadingsneutral:String, jobcard_voltagereadingRW:String, jobcard_voltagereadingRN:String, jobcard_voltagereadingRE:String, jobcard_voltagereadingRB:String, jobcard_voltagereadingWN:String, jobcard_voltagereadingWE:String, jobcard_voltagereadingWB:String, jobcard_voltagereadingBN:String, jobcard_voltagereadingBE:String, jobcard_voltagereadingNE:String, jobcard_electricalcomments:String, jobcard_earthleakage:String, jobcard_earthohm:String, jobcard_earthcomments:String},
	jobcardrectifierinfo:{jobcard_rectmake:String, jobcard_opproperly:String, jobcard_slotspopulated:String, jobcard_parametersokay:String, jobcard_systemupgrade:String, jobcard_slotsburn:String, jobcard_supervisormodule:String, jobcard_lvdokay:String, jobcard_pldokay:String, jobcard_AcDcCbOkay:String, jobcard_alarmcommport:String, jobcard_rectifiercomments:String},
	jobcardbatterybanksinfo:{jobcard_batterybank1_test1_cell1:String, jobcard_batterybank1_test1_cell2:String, jobcard_batterybank1_test1_cell3:String, jobcard_batterybank1_test1_cell4:String, jobcard_batterybank1_test2_cell1:String, jobcard_batterybank1_test2_cell2:String, jobcard_batterybank1_test2_cell3:String, jobcard_batterybank1_test2_cell4:String, jobcard_batterybank2_test1_cell5:String, jobcard_batterybank2_test1_cell6:String, jobcard_batterybank2_test1_cell7:String, jobcard_batterybank2_test1_cell8:String, jobcard_batterybank2_test2_cell5:String, jobcard_batterybank2_test2_cell6:String, jobcard_batterybank2_test2_cell7:String, jobcard_batterybank2_test2_cell8:String, jobcard_batterybank3_test1_cell9:String, jobcard_batterybank3_test1_cell10:String, jobcard_batterybank3_test1_cell11:String, jobcard_batterybank3_test1_cell12:String, jobcard_batterybank3_test2_cell9:String, jobcard_batterybank3_test2_cell10:String, jobcard_batterybank3_test2_cell11:String, jobcard_batterybank3_test2_cell12:String, jobcard_batterybank4_test1_cell13:String, jobcard_batterybank4_test1_cell14:String, jobcard_batterybank4_test1_cell15:String, jobcard_batterybank4_test1_cell16:String, jobcard_batterybank4_test2_cell13:String, jobcard_batterybank4_test2_cell14:String, jobcard_batterybank4_test2_cell15:String, jobcard_batterybank4_test2_cell16:String, jobcard_batterybank5_test1_cell17:String, jobcard_batterybank5_test1_cell18:String, jobcard_batterybank5_test1_cell19:String, jobcard_batterybank5_test1_cell20:String, jobcard_batterybank5_test2_cell17:String, jobcard_batterybank5_test2_cell18:String, jobcard_batterybank5_test2_cell19:String, jobcard_batterybank5_test2_cell20:String, jobcard_batterybank6_test1_cell21:String, jobcard_batterybank6_test1_cell22:String, jobcard_batterybank6_test1_cell23:String, jobcard_batterybank6_test1_cell24:String, jobcard_batterybank6_test2_cell21:String, jobcard_batterybank6_test2_cell22:String, jobcard_batterybank6_test2_cell23:String, jobcard_batterybank6_test2_cell24:String},
	jobcardaircondinfo:{jobcard_noisevibration:String, jobcard_cleanfilter:String, jobcard_hightemperature:String, jobcard_operatingtime:String, jobcard_accooling:String, jobcard_acmodelcapacity:String, jobcard_accageinst:String},
	jobcardantennasinfo:{jobcard_antennasecure:String, jobcard_bracketscond:String, jobcard_clampcond:String, jobcard_opticfibercond:String, jobcard_rrucables:String, jobcard_rrucond:String, jobcard_aauearth:String, jobcard_jumpercond:String, jobcard_dcducables:String, jobcard_cablesdamages:String, jobcard_opticLabels:String, jobcard_constructionradius:String, jobcard_radiocomments:String},
	jobcardeainfo:{jobcard_acmains:String, jobcard_ac1:String, jobcard_ac2:String, jobcard_doorswitch:String, jobcard_genabnormal:String, jobcard_genlowfuel:String, jobcard_genrunning:String, jobcard_rectmodule:String, jobcard_rectsystem:String, jobcard_hightemp:String, jobcard_eainfocomments:String},
	jobcardtxinfo:{jobcard_internalearth:String, jobcard_internelectconnect:String, jobcard_internallabels:String,jobcard_internalddf:String, jobcard_internalconnecttight:String, jobcard_internalIFlabels:String, jobcard_txinternalcomm:String, jobcard_externalbrackets:String, jobcard_externalnutstight:String, jobcard_externalearth:String, jobcard_externalIFconntight:String, jobcard_externallabels:String, jobcard_externalwaterproof:String, jobcard_externalcomm:String},
	jobcardvsatinfo:{jobcard_vsatlinkfrom:String, jobcard_vsatlinkto:String, jobcard_ebno:String, jobcard_txlevel:String, jobcard_equipmentlabels:String, jobcard_cableslabels:String, jobcard_entrysealed:String, jobcard_conduittrunksclean:String, jobcard_230vrecLN:String, jobcard_230vrecLE:String, jobcard_230vrecNE:String, jobcard_230vrecEEBar:String, jobcard_downloadmodemconfig:String, jobcard_checkplugsconntight:String, jobcard_checkdishplunthclean:String, jobcard_checkdishcracksagg:String, jobcard_checkgalvaniseditems:String, jobcard_checkdishdentsbumpsplit:String, jobcard_checkfanintsakevent:String, jobcard_checkdishearthdensorpaste:String, jobcard_checkdishtight:String,jobcard_checkconnsealed:String, jobcard_checkentrysealed:String,  jobcard_checksignalpathobst:String, jobcard_vsatcomments:String},
	jobcardphotoinfo:[String],
	jobcardconcernsinfo:{jobcard_concernsmaintnumber:String, jobcard_concernstype:String, jobcard_concernsdescription:String, jobcard_concernsdate:String, jobcard_concernsacknowledged:String}

})

jobcardprojectSchema.statics.gravarDados=function(hvacproject, callback){
	this.create(hvacproject, callback);
}

jobcardprojectSchema.statics.visualizacao=function(hvacproject, callback){
	this.find(hvacproject);
	}

module.exports=mongoose.model("Hvac_Project",jobcardprojectSchema, "Hvac_Project");
﻿



CREATE TABLE [Сотрудники] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [ФИО] VARCHAR(255)  NULL,

	 [Должности] UNIQUEIDENTIFIER  NOT NULL,

	 [ОтделКр] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ПогашКр] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [ВидПогашКр] VARCHAR(11)  NULL,

	 [Дата] DATETIME  NULL,

	 [СуммаПогашКр] INT  NULL,

	 [ЗаклКрДог] UNIQUEIDENTIFIER  NOT NULL,

	 [Организация] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ПроверкаКрКл] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Дата] DATETIME  NULL,

	 [ДоходыВМес] INT  NULL,

	 [НаличЗалога] VARCHAR(255)  NULL,

	 [НаличиеПоручит] VARCHAR(255)  NULL,

	 [ОдобрениеКр] BIT  NULL,

	 [СуммаЕжПлЗаКр] INT  NULL,

	 [ЗаклКрДог] UNIQUEIDENTIFIER  NOT NULL,

	 [Организация] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ЗаклКрДог] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [ВидКредита] VARCHAR(15)  NULL,

	 [ВидПогашКр] VARCHAR(11)  NULL,

	 [Дата] DATETIME  NULL,

	 [НомерКрДог] INT  NULL,

	 [СодержДогЗал] VARCHAR(255)  NULL,

	 [СуммаКредита] INT  NULL,

	 [ЦельКр] VARCHAR(255)  NULL,

	 [Организация] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Клиенты] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [ИНН] INT  NULL,

	 [КПП] INT  NULL,

	 [МестоРаботы] VARCHAR(255)  NULL,

	 [НомКрДог] INT  NULL,

	 [РасчСчет] INT  NULL,

	 [СтажРаботы] INT  NULL,

	 [Телефон] INT  NULL,

	 [ФактАдрес] VARCHAR(255)  NULL,

	 [ФИО] VARCHAR(255)  NULL,

	 [ЮрАдрес] VARCHAR(255)  NULL,

	 [ЗаклКрДог] UNIQUEIDENTIFIER  NOT NULL,

	 [ПогашКр] UNIQUEIDENTIFIER  NOT NULL,

	 [ПроверкаКрКл] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Организация] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Наименование] VARCHAR(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ОтделКр] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Должности] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [IDДолжности] INT  NULL,

	 [Наименование] VARCHAR(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMNETLOCKDATA] (

	 [LockKey] VARCHAR(300)  NOT NULL,

	 [UserName] VARCHAR(300)  NOT NULL,

	 [LockDate] DATETIME  NULL,

	 PRIMARY KEY ([LockKey]))


CREATE TABLE [STORMSETTINGS] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Module] varchar(1000)  NULL,

	 [Name] varchar(255)  NULL,

	 [Value] text  NULL,

	 [User] varchar(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMAdvLimit] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [User] varchar(255)  NULL,

	 [Published] bit  NULL,

	 [Module] varchar(255)  NULL,

	 [Name] varchar(255)  NULL,

	 [Value] text  NULL,

	 [HotKeyData] int  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERSETTING] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Name] varchar(255)  NOT NULL,

	 [DataObjectView] varchar(255)  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMWEBSEARCH] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Name] varchar(255)  NOT NULL,

	 [Order] INT  NOT NULL,

	 [PresentView] varchar(255)  NOT NULL,

	 [DetailedView] varchar(255)  NOT NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERDETAIL] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Caption] varchar(255)  NOT NULL,

	 [DataObjectView] varchar(255)  NOT NULL,

	 [ConnectMasterProp] varchar(255)  NOT NULL,

	 [OwnerConnectProp] varchar(255)  NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERLOOKUP] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [DataObjectType] varchar(255)  NOT NULL,

	 [Container] varchar(255)  NULL,

	 [ContainerTag] varchar(255)  NULL,

	 [FieldsToView] varchar(255)  NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [UserSetting] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [AppName] varchar(256)  NULL,

	 [UserName] varchar(512)  NULL,

	 [UserGuid] uniqueidentifier  NULL,

	 [ModuleName] varchar(1024)  NULL,

	 [ModuleGuid] uniqueidentifier  NULL,

	 [SettName] varchar(256)  NULL,

	 [SettGuid] uniqueidentifier  NULL,

	 [SettLastAccessTime] DATETIME  NULL,

	 [StrVal] varchar(256)  NULL,

	 [TxtVal] varchar(max)  NULL,

	 [IntVal] int  NULL,

	 [BoolVal] bit  NULL,

	 [GuidVal] uniqueidentifier  NULL,

	 [DecimalVal] decimal(20,10)  NULL,

	 [DateTimeVal] DATETIME  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ApplicationLog] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Category] varchar(64)  NULL,

	 [EventId] INT  NULL,

	 [Priority] INT  NULL,

	 [Severity] varchar(32)  NULL,

	 [Title] varchar(256)  NULL,

	 [Timestamp] DATETIME  NULL,

	 [MachineName] varchar(32)  NULL,

	 [AppDomainName] varchar(512)  NULL,

	 [ProcessId] varchar(256)  NULL,

	 [ProcessName] varchar(512)  NULL,

	 [ThreadName] varchar(512)  NULL,

	 [Win32ThreadId] varchar(128)  NULL,

	 [Message] varchar(2500)  NULL,

	 [FormattedMessage] varchar(max)  NULL,

	 PRIMARY KEY ([primaryKey]))





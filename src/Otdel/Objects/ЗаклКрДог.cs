﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Otdel
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Закл кр дог.
    /// </summary>
    // *** Start programmer edit section *** (ЗаклКрДог CustomAttributes)

    // *** End programmer edit section *** (ЗаклКрДог CustomAttributes)
    [AutoAltered()]
    [Caption("Закл кр дог")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ЗаклКрДогE", new string[] {
            "Дата as \'Дата\'",
            "ЦельКр as \'Цель кр\'",
            "ВидПогашКр as \'Вид погаш кр\'",
            "ВидКредита as \'Вид кредита\'",
            "СуммаКредита as \'Сумма кредита\'",
            "НомерКрДог as \'Номер кр дог\'",
            "СодержДогЗал as \'Содерж дог зал\'",
            "Организация as \'Организация\'",
            "Организация.Наименование as \'Наименование\'"}, Hidden=new string[] {
            "Организация.Наименование"})]
    [MasterViewDefineAttribute("ЗаклКрДогE", "Организация", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Наименование")]
    [View("ЗаклКрДогL", new string[] {
            "Дата as \'Дата\'",
            "ЦельКр as \'Цель кр\'",
            "ВидПогашКр as \'Вид погаш кр\'",
            "ВидКредита as \'Вид кредита\'",
            "СуммаКредита as \'Сумма кредита\'",
            "НомерКрДог as \'Номер кр дог\'",
            "СодержДогЗал as \'Содерж дог зал\'",
            "Организация.Наименование as \'Наименование\'"})]
    public class ЗаклКрДог : ICSSoft.STORMNET.DataObject
    {
        
        private System.DateTime fДата;
        
        private string fЦельКр;
        
        private IIS.Otdel.ВидПогашКр fВидПогашКр;
        
        private IIS.Otdel.ВидКредита fВидКредита;
        
        private int fСуммаКредита;
        
        private int fНомерКрДог;
        
        private string fСодержДогЗал;
        
        private IIS.Otdel.Организация fОрганизация;
        
        // *** Start programmer edit section *** (ЗаклКрДог CustomMembers)

        // *** End programmer edit section *** (ЗаклКрДог CustomMembers)

        
        /// <summary>
        /// ВидКредита.
        /// </summary>
        // *** Start programmer edit section *** (ЗаклКрДог.ВидКредита CustomAttributes)

        // *** End programmer edit section *** (ЗаклКрДог.ВидКредита CustomAttributes)
        public virtual IIS.Otdel.ВидКредита ВидКредита
        {
            get
            {
                // *** Start programmer edit section *** (ЗаклКрДог.ВидКредита Get start)

                // *** End programmer edit section *** (ЗаклКрДог.ВидКредита Get start)
                IIS.Otdel.ВидКредита result = this.fВидКредита;
                // *** Start programmer edit section *** (ЗаклКрДог.ВидКредита Get end)

                // *** End programmer edit section *** (ЗаклКрДог.ВидКредита Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЗаклКрДог.ВидКредита Set start)

                // *** End programmer edit section *** (ЗаклКрДог.ВидКредита Set start)
                this.fВидКредита = value;
                // *** Start programmer edit section *** (ЗаклКрДог.ВидКредита Set end)

                // *** End programmer edit section *** (ЗаклКрДог.ВидКредита Set end)
            }
        }
        
        /// <summary>
        /// ВидПогашКр.
        /// </summary>
        // *** Start programmer edit section *** (ЗаклКрДог.ВидПогашКр CustomAttributes)

        // *** End programmer edit section *** (ЗаклКрДог.ВидПогашКр CustomAttributes)
        public virtual IIS.Otdel.ВидПогашКр ВидПогашКр
        {
            get
            {
                // *** Start programmer edit section *** (ЗаклКрДог.ВидПогашКр Get start)

                // *** End programmer edit section *** (ЗаклКрДог.ВидПогашКр Get start)
                IIS.Otdel.ВидПогашКр result = this.fВидПогашКр;
                // *** Start programmer edit section *** (ЗаклКрДог.ВидПогашКр Get end)

                // *** End programmer edit section *** (ЗаклКрДог.ВидПогашКр Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЗаклКрДог.ВидПогашКр Set start)

                // *** End programmer edit section *** (ЗаклКрДог.ВидПогашКр Set start)
                this.fВидПогашКр = value;
                // *** Start programmer edit section *** (ЗаклКрДог.ВидПогашКр Set end)

                // *** End programmer edit section *** (ЗаклКрДог.ВидПогашКр Set end)
            }
        }
        
        /// <summary>
        /// Дата.
        /// </summary>
        // *** Start programmer edit section *** (ЗаклКрДог.Дата CustomAttributes)

        // *** End programmer edit section *** (ЗаклКрДог.Дата CustomAttributes)
        public virtual System.DateTime Дата
        {
            get
            {
                // *** Start programmer edit section *** (ЗаклКрДог.Дата Get start)

                // *** End programmer edit section *** (ЗаклКрДог.Дата Get start)
                System.DateTime result = this.fДата;
                // *** Start programmer edit section *** (ЗаклКрДог.Дата Get end)

                // *** End programmer edit section *** (ЗаклКрДог.Дата Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЗаклКрДог.Дата Set start)

                // *** End programmer edit section *** (ЗаклКрДог.Дата Set start)
                this.fДата = value;
                // *** Start programmer edit section *** (ЗаклКрДог.Дата Set end)

                // *** End programmer edit section *** (ЗаклКрДог.Дата Set end)
            }
        }
        
        /// <summary>
        /// НомерКрДог.
        /// </summary>
        // *** Start programmer edit section *** (ЗаклКрДог.НомерКрДог CustomAttributes)

        // *** End programmer edit section *** (ЗаклКрДог.НомерКрДог CustomAttributes)
        public virtual int НомерКрДог
        {
            get
            {
                // *** Start programmer edit section *** (ЗаклКрДог.НомерКрДог Get start)

                // *** End programmer edit section *** (ЗаклКрДог.НомерКрДог Get start)
                int result = this.fНомерКрДог;
                // *** Start programmer edit section *** (ЗаклКрДог.НомерКрДог Get end)

                // *** End programmer edit section *** (ЗаклКрДог.НомерКрДог Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЗаклКрДог.НомерКрДог Set start)

                // *** End programmer edit section *** (ЗаклКрДог.НомерКрДог Set start)
                this.fНомерКрДог = value;
                // *** Start programmer edit section *** (ЗаклКрДог.НомерКрДог Set end)

                // *** End programmer edit section *** (ЗаклКрДог.НомерКрДог Set end)
            }
        }
        
        /// <summary>
        /// СодержДогЗал.
        /// </summary>
        // *** Start programmer edit section *** (ЗаклКрДог.СодержДогЗал CustomAttributes)

        // *** End programmer edit section *** (ЗаклКрДог.СодержДогЗал CustomAttributes)
        [StrLen(255)]
        public virtual string СодержДогЗал
        {
            get
            {
                // *** Start programmer edit section *** (ЗаклКрДог.СодержДогЗал Get start)

                // *** End programmer edit section *** (ЗаклКрДог.СодержДогЗал Get start)
                string result = this.fСодержДогЗал;
                // *** Start programmer edit section *** (ЗаклКрДог.СодержДогЗал Get end)

                // *** End programmer edit section *** (ЗаклКрДог.СодержДогЗал Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЗаклКрДог.СодержДогЗал Set start)

                // *** End programmer edit section *** (ЗаклКрДог.СодержДогЗал Set start)
                this.fСодержДогЗал = value;
                // *** Start programmer edit section *** (ЗаклКрДог.СодержДогЗал Set end)

                // *** End programmer edit section *** (ЗаклКрДог.СодержДогЗал Set end)
            }
        }
        
        /// <summary>
        /// СуммаКредита.
        /// </summary>
        // *** Start programmer edit section *** (ЗаклКрДог.СуммаКредита CustomAttributes)

        // *** End programmer edit section *** (ЗаклКрДог.СуммаКредита CustomAttributes)
        public virtual int СуммаКредита
        {
            get
            {
                // *** Start programmer edit section *** (ЗаклКрДог.СуммаКредита Get start)

                // *** End programmer edit section *** (ЗаклКрДог.СуммаКредита Get start)
                int result = this.fСуммаКредита;
                // *** Start programmer edit section *** (ЗаклКрДог.СуммаКредита Get end)

                // *** End programmer edit section *** (ЗаклКрДог.СуммаКредита Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЗаклКрДог.СуммаКредита Set start)

                // *** End programmer edit section *** (ЗаклКрДог.СуммаКредита Set start)
                this.fСуммаКредита = value;
                // *** Start programmer edit section *** (ЗаклКрДог.СуммаКредита Set end)

                // *** End programmer edit section *** (ЗаклКрДог.СуммаКредита Set end)
            }
        }
        
        /// <summary>
        /// ЦельКр.
        /// </summary>
        // *** Start programmer edit section *** (ЗаклКрДог.ЦельКр CustomAttributes)

        // *** End programmer edit section *** (ЗаклКрДог.ЦельКр CustomAttributes)
        [StrLen(255)]
        public virtual string ЦельКр
        {
            get
            {
                // *** Start programmer edit section *** (ЗаклКрДог.ЦельКр Get start)

                // *** End programmer edit section *** (ЗаклКрДог.ЦельКр Get start)
                string result = this.fЦельКр;
                // *** Start programmer edit section *** (ЗаклКрДог.ЦельКр Get end)

                // *** End programmer edit section *** (ЗаклКрДог.ЦельКр Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЗаклКрДог.ЦельКр Set start)

                // *** End programmer edit section *** (ЗаклКрДог.ЦельКр Set start)
                this.fЦельКр = value;
                // *** Start programmer edit section *** (ЗаклКрДог.ЦельКр Set end)

                // *** End programmer edit section *** (ЗаклКрДог.ЦельКр Set end)
            }
        }
        
        /// <summary>
        /// Закл кр дог.
        /// </summary>
        // *** Start programmer edit section *** (ЗаклКрДог.Организация CustomAttributes)

        // *** End programmer edit section *** (ЗаклКрДог.Организация CustomAttributes)
        [PropertyStorage(new string[] {
                "Организация"})]
        [NotNull()]
        public virtual IIS.Otdel.Организация Организация
        {
            get
            {
                // *** Start programmer edit section *** (ЗаклКрДог.Организация Get start)

                // *** End programmer edit section *** (ЗаклКрДог.Организация Get start)
                IIS.Otdel.Организация result = this.fОрганизация;
                // *** Start programmer edit section *** (ЗаклКрДог.Организация Get end)

                // *** End programmer edit section *** (ЗаклКрДог.Организация Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЗаклКрДог.Организация Set start)

                // *** End programmer edit section *** (ЗаклКрДог.Организация Set start)
                this.fОрганизация = value;
                // *** Start programmer edit section *** (ЗаклКрДог.Организация Set end)

                // *** End programmer edit section *** (ЗаклКрДог.Организация Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ЗаклКрДогE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЗаклКрДогE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЗаклКрДогE", typeof(IIS.Otdel.ЗаклКрДог));
                }
            }
            
            /// <summary>
            /// "ЗаклКрДогL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЗаклКрДогL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЗаклКрДогL", typeof(IIS.Otdel.ЗаклКрДог));
                }
            }
        }
    }
}

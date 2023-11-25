package Otdel.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Otdel.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Клиенты
 */
@Entity(name = "IISOtdelКлиенты")
@Table(schema = "public", name = "Клиенты")
public class Klienty {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ФИО")
    private String фио;

    @Column(name = "ИНН")
    private Integer инн;

    @Column(name = "КПП")
    private Integer кпп;

    @Column(name = "Телефон")
    private Integer телефон;

    @Column(name = "МестоРаботы")
    private String местоработы;

    @Column(name = "ЮрАдрес")
    private String юрадрес;

    @Column(name = "ФактАдрес")
    private String фактадрес;

    @Column(name = "СтажРаботы")
    private Integer стажработы;

    @Column(name = "НомКрДог")
    private Integer номкрдог;

    @Column(name = "РасчСчет")
    private Integer расчсчет;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "ZaklKrDog")
    @Convert("ZaklKrDog")
    @Column(name = "ЗаклКрДог", length = 16, unique = true, nullable = false)
    private UUID _zaklkrdogid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "ZaklKrDog", insertable = false, updatable = false)
    private ZaklKrDog zaklkrdog;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "ProverkaKrKl")
    @Convert("ProverkaKrKl")
    @Column(name = "ПроверкаКрКл", length = 16, unique = true, nullable = false)
    private UUID _proverkakrklid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "ProverkaKrKl", insertable = false, updatable = false)
    private ProverkaKrKl proverkakrkl;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "PogashKr")
    @Convert("PogashKr")
    @Column(name = "ПогашКр", length = 16, unique = true, nullable = false)
    private UUID _pogashkrid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "PogashKr", insertable = false, updatable = false)
    private PogashKr pogashkr;


    public Klienty() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getФИО() {
      return фио;
    }

    public void setФИО(String фио) {
      this.фио = фио;
    }

    public Integer getИНН() {
      return инн;
    }

    public void setИНН(Integer инн) {
      this.инн = инн;
    }

    public Integer getКПП() {
      return кпп;
    }

    public void setКПП(Integer кпп) {
      this.кпп = кпп;
    }

    public Integer getТелефон() {
      return телефон;
    }

    public void setТелефон(Integer телефон) {
      this.телефон = телефон;
    }

    public String getМестоРаботы() {
      return местоработы;
    }

    public void setМестоРаботы(String местоработы) {
      this.местоработы = местоработы;
    }

    public String getЮрАдрес() {
      return юрадрес;
    }

    public void setЮрАдрес(String юрадрес) {
      this.юрадрес = юрадрес;
    }

    public String getФактАдрес() {
      return фактадрес;
    }

    public void setФактАдрес(String фактадрес) {
      this.фактадрес = фактадрес;
    }

    public Integer getСтажРаботы() {
      return стажработы;
    }

    public void setСтажРаботы(Integer стажработы) {
      this.стажработы = стажработы;
    }

    public Integer getНомКрДог() {
      return номкрдог;
    }

    public void setНомКрДог(Integer номкрдог) {
      this.номкрдог = номкрдог;
    }

    public Integer getРасчСчет() {
      return расчсчет;
    }

    public void setРасчСчет(Integer расчсчет) {
      this.расчсчет = расчсчет;
    }


}
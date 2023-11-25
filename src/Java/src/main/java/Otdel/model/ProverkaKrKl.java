package Otdel.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Otdel.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: ПроверкаКрКл
 */
@Entity(name = "IISOtdelПроверкаКрКл")
@Table(schema = "public", name = "ПроверкаКрКл")
public class ProverkaKrKl {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Дата")
    private Date дата;

    @Column(name = "ДоходыВМес")
    private Integer доходывмес;

    @Column(name = "СуммаЕжПлЗаКр")
    private Integer суммаежплзакр;

    @Column(name = "НаличЗалога")
    private String наличзалога;

    @Column(name = "НаличиеПоручит")
    private String наличиепоручит;

    @Column(name = "ОдобрениеКр")
    private Boolean одобрениекр;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Organizaciya")
    @Convert("Organizaciya")
    @Column(name = "Организация", length = 16, unique = true, nullable = false)
    private UUID _organizaciyaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Organizaciya", insertable = false, updatable = false)
    private Organizaciya organizaciya;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "ZaklKrDog")
    @Convert("ZaklKrDog")
    @Column(name = "ЗаклКрДог", length = 16, unique = true, nullable = false)
    private UUID _zaklkrdogid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "ZaklKrDog", insertable = false, updatable = false)
    private ZaklKrDog zaklkrdog;


    public ProverkaKrKl() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }

    public Integer getДоходыВМес() {
      return доходывмес;
    }

    public void setДоходыВМес(Integer доходывмес) {
      this.доходывмес = доходывмес;
    }

    public Integer getСуммаЕжПлЗаКр() {
      return суммаежплзакр;
    }

    public void setСуммаЕжПлЗаКр(Integer суммаежплзакр) {
      this.суммаежплзакр = суммаежплзакр;
    }

    public String getНаличЗалога() {
      return наличзалога;
    }

    public void setНаличЗалога(String наличзалога) {
      this.наличзалога = наличзалога;
    }

    public String getНаличиеПоручит() {
      return наличиепоручит;
    }

    public void setНаличиеПоручит(String наличиепоручит) {
      this.наличиепоручит = наличиепоручит;
    }

    public Boolean getОдобрениеКр() {
      return одобрениекр;
    }

    public void setОдобрениеКр(Boolean одобрениекр) {
      this.одобрениекр = одобрениекр;
    }


}
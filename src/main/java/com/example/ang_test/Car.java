package com.example.ang_test;

import javax.persistence.*;
import java.util.Arrays;

@Entity
public class Car {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;
    private String felgen;

    private int felgenPreis;
    private int farbePreis;

    private String farbe;
    private int motorleistung;
    private int motorPreis;
    private int addOnPreis;

    private  String addOns;

    private int gesamtPreis;




    public Car( String felgenID,int felgenPreis, int farbePreis, String farbe,  int motorleistung, int motorPreis, int addOnPreis,String addOn, int gesamtPreis) {
        this.felgen = felgenID;
        this.felgenPreis=felgenPreis;
        this.farbe = farbe;
        this.farbePreis = farbePreis;
        this.motorleistung = motorleistung;
        this.motorPreis = motorPreis;
        this.addOnPreis=addOnPreis;
        this.addOns = addOn;
        this.gesamtPreis=gesamtPreis;
    }

    public Car(){

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFelgen() {
        return felgen;
    }

    public void setFelgen(String felgenID) {
        this.felgen = felgenID;
    }

    public String getFarbe() {
        return farbe;
    }

    public void setFarbe(String farbe) {
        this.farbe = farbe;
    }

    public int getFarbePreis() {
        return farbePreis;
    }

    public void setFarbePreis(int farbePreis) {
        this.farbePreis = farbePreis;
    }

    public int getMotorleistung() {
        return motorleistung;
    }

    public void setMotorleistung(int motorleistung) {
        this.motorleistung = motorleistung;
    }

    public int getMotorPreis() {
        return motorPreis;
    }

    public void setMotorPreis(int motorPreis) {
        this.motorPreis = motorPreis;
    }

    public String[] getAddOns() {
        return addOns.split(",");
    }

    public void setAddOns(String[] addOns) {
        this.addOns = Arrays.toString(addOns);
    }

    public int getFelgenPreis() {
        return felgenPreis;
    }

    public void setFelgenPreis(int felgenPreis) {
        this.felgenPreis = felgenPreis;
    }

    public int getAddOnPreis() {
        return addOnPreis;
    }

    public void setAddOnPreis(int addOnPreis) {
        this.addOnPreis = addOnPreis;
    }

    public int getGesamtPreis() {
        return gesamtPreis;
    }

    public void setGesamtPreis(int gesamtPreis) {
        this.gesamtPreis = gesamtPreis;
    }
}

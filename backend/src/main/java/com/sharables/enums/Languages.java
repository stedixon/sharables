package com.sharables.enums;

import com.fasterxml.jackson.annotation.JsonProperty;

public enum Languages {
    
    @JsonProperty("en")
    ENGLISH("en");

    private final String abbreviation;

    Languages(String abbreviation) {
        this.abbreviation = abbreviation;
    }

    public String getAbbreviation() {
        return abbreviation;
    }
}

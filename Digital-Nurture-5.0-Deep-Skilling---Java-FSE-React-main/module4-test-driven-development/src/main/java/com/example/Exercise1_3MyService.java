package com.example;

public class Exercise1_3MyService {

    private Exercise1_3ExternalApi externalApi;

    public Exercise1_3MyService(Exercise1_3ExternalApi externalApi) {
        this.externalApi = externalApi;
    }

    public String fetchData() {
        return externalApi.getData();
    }
}
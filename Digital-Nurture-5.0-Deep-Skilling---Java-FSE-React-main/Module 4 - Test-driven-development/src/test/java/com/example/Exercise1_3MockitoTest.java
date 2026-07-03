package com.example;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.*;

import org.junit.Test;

public class Exercise1_3MockitoTest {

    @Test
    public void testFetchData() {

        Exercise1_3ExternalApi mockApi = mock(Exercise1_3ExternalApi.class);

        when(mockApi.getData()).thenReturn("Mock Data");

        Exercise1_3MyService service = new Exercise1_3MyService(mockApi);

        String result = service.fetchData();

        assertEquals("Mock Data", result);
    }
}
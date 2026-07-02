package com.example;

import static org.mockito.Mockito.*;

import org.junit.Test;

public class Exercise2_3VerifyInteractionTest {

    @Test
    public void testVerifyInteraction() {

        Exercise1_3ExternalApi mockApi = mock(Exercise1_3ExternalApi.class);

        when(mockApi.getData()).thenReturn("Mock Data");

        Exercise1_3MyService service = new Exercise1_3MyService(mockApi);

        service.fetchData();

        verify(mockApi).getData();
    }
}

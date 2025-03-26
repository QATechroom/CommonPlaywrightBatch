import { test, expect } from '@playwright/test';

test('Verify API PUT Request', async ({ request }) => {
    const response = await request.put('https://reqres.in/api/users/2', {
        data: {
            name: 'Jane Doe',
            job: 'Lead Engineer'
        }
    });

    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    console.log(responseBody);

    expect(responseBody.name).toBe('Jane Doe');
    expect(responseBody.job).toBe('Lead Engineer');
});

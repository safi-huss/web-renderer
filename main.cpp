#define FETCH_DEBUG

#include <iostream>
#include <iomanip>

#include "BackendQuery.h"

int main()
{
    std::string strKey =
        "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkJBNEIzMDAwNERBNEFCMjFCQUJEQjY5N0I2QjRFNzYwIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2MzQ5MDcyMzQsImV4cCI6MTY2NjQ0MzIzNCwiaXNzIjoiaHR0cHM6Ly93b3JrcGxhY2VpZHAuYXp1cmV3ZWJzaXRlcy5uZXQiLCJjbGllbnRfaWQiOiJpT1NDbGllbnQiLCJzdWIiOiIyMDhkOTA2NS0yNjhiLThmYzUtYWU1ZS0zOWZlZmZhN2UwYTQiLCJhdXRoX3RpbWUiOjE2MzQ5MDcyMzEsImlkcCI6Ik9wZW5JZENvbm5lY3QiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9naXZlbm5hbWUiOiJNdWhhbW1hZCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3N1cm5hbWUiOiJJZHJpcyIsInByZWZlcnJlZF91c2VybmFtZSI6Im11aGFtbWFkLmlkcmlzQG9wdGVyYS5kaWdpdGFsIiwiZ2l2ZW5fbmFtZSI6Ik11aGFtbWFkIiwiZmFtaWx5X25hbWUiOiJJZHJpcyIsInNpZCI6Ijg4QzFBRTJENjczMTM3RTZBM0U4Q0E2NTA5MDlDRDVFIiwiaWF0IjoxNjM0OTA3MjM0LCJzY29wZSI6WyJvcGVuaWQiLCJwcm9maWxlIl0sImFtciI6WyJleHRlcm5hbCJdfQ.Oh7Rl8Huefen-3V8PV_krvyG0mBKvb0TFlp-_dzPtw57WELY4UHxHYXwOlVxkrLt4JtlpEUw4HiTKmesZmxn1BYwX6oXBOD-i7Gp6M0-WdaAnquCAae5SiLvwfPtpmc-FC-59kguXG8prZ2U8JucaocS3Kjb7avRYsMjBrH2buIzyAQMW0188jZgUod_5Or9IkxW9Ayx5jXevYzZuqw9o1-bb_n9LE46mMqZYUejVHjFM80I-ksIGe6M1CSuuo8asU9Vaf_lYqizP8gA0sJN3E34NDpGKGcK9kpaC2LnoXLxufiY5A0bKAZuj0BQoUMbSHQ8HPVMS-9LQdb9mTDCpg";
    std::cout << "Welcome to the Machine!" << std::endl;
    std::cout << NBackendQuery::GetJsonFromRestApi("https://dev-dtwin.azurewebsites.net//api/Ifc/GetAllProjects", strKey) << std::endl;
    std::cout << "The End" << std::endl;
    return 0;
}
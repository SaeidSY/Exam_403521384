#include<iostream>
#include "raylib.h"


int main() {
    const int screenWidth = 500;
    const int screenHeight = 500;

    InitWindow(screenWidth, screenHeight, "Raylib Window");

    SetTargetFPS(20);
    
    while (!WindowShouldClose()) { 

        BeginDrawing();

        ClearBackground(BLUE);

        EndDrawing();
    }

   
    CloseWindow();

    return 0;
}

#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <math.h>
#include <stdlib.h>
#include <time.h>

//�Է� 2�� �޾Ƽ� ū��-������
int main19() {
	int a = 0, b = 0;
	scanf("%d %d", &a, &b);
	printf("%d", ((a > b) ? a : b) - ((a < b) ? a : b));
}



#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <math.h>
#include <stdlib.h>
#include <time.h>

//int���� ���� x, y�� ���� ���� ��ȯ�ϴ� ���α׷�
int main10() {
	int x = 10, y = 20;
	int temp;

	printf("%d %d\n", x, y);
	temp = x;
	x = y;
	y = temp;

	printf("%d %d", x, y);
}



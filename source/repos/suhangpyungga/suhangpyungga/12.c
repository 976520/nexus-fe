#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <math.h>
#include <stdlib.h>
#include <time.h>

//3���� ���� ���� �Է¹޾Ƽ� �ִ밪�� ����ϴ� ���α׷�
int main12() {
	int a, b, c;
	scanf("%d %d %d", &a, &b, &c);

	printf("%d", ((a > b) ? a : b) > c ? ((a > b) ? a : b) : c);
}



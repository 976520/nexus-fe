#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <math.h>
#include <stdlib.h>
#include <time.h>

//�ʸ� �Է¹޾� �� �� �ʷ� ���
int main21() {
	int second;
	scanf("%d", &second);

	int hour = second / 3600;
	second = second % 3600;
	int minute = second / 60;
	second = second % 60;
	printf("%d�� %d�� %d��", hour, minute, second);
}



#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <math.h>
#include <stdlib.h>
#include <time.h>

//�������� �ƴ��� �Ǻ� (4�� ����̸鼭 100�� ����� �ƴϸ� ����, 400�� ����� ����)
int main16() {
	int a;
	scanf("%d", &a);

	if (a % 4 == 0 && a % 100 != 0) {
		printf("yes");
	}
	else if (a % 400 == 0) {
		printf("yes");
	}
	else {
		printf("no");
	}

}



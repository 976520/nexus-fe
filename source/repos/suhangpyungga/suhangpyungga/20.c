#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <math.h>
#include <stdlib.h>
#include <time.h>

//�� ���� ����(a<=b<=c)�� �Է¹ް� ���� �ﰢ��(�ﰢ���� �ƴ�, ��, �̵, ����, �Ϲ�)���� �Ǵ�
int main20() {
	int a, b, c;
	scanf("%d %d %d", &a, &b, &c);
	if (a + b <= c) {
		printf("�ﰢ���� �ƴ�");
	}
	else if (a == b && b == c) {
		printf("���ﰢ��");
	}
	else if (a == b || b == c || c || a) {
		printf("�̵�ﰢ��");
	}
	else if (a * a + b * b == c * c) {
		printf("�����ﰢ��");
	}
	else {
		printf("�Ϲݻﰢ��");
	}
}


